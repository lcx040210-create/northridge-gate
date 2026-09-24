# 北岭闸口 UX 大改造计划

## 改造目标
将游戏从静态面板交互转变为沉浸式第一人称体验，增加武器交互、小游戏化处决、最终 Boss 战。

---

## 一、房间布局优化

### 1.1 沙发后通道
**目标**：完全移除空气墙，沙发后有 1.2m 宽通道可行走

**实施**：
- 调整沙发位置：从 `z=2.2` 前移至 `z=1.8`
- 扩展 BOUNDS：`maxZ` 从 2.95 → 3.2
- 后墙位置保持 `z=-3`，通道范围 `z=2.3~3.0`

### 1.2 武器柜与门分离
**目标**：武器柜不挡门，门可直接交互

**实施**：
- 武器柜保持右墙 `x=4.2, z=1.2`
- 门移至右墙靠后 `x=4.9, z=-0.5`（靠近储物柜）
- 门交互显示锁住提示（"NO EXIT UNTIL DAWN"）

---

## 二、第一人称视角增强

### 2.1 双手模型
**目标**：走动时看到双手，持武器时显示武器模型

**实施**：
- 创建 `src/scene/hands.ts`：Three.js 简化双手网格
  - 空手：两个手臂圆柱 + 手掌方块，放置在相机下方
  - 持斧：右手握柄，斧头模型朝前
  - 持枪：双手握枪姿势
  - 持焚化罐：右手握罐体

- 走动时手臂轻微摆动：
  ```ts
  const swing = Math.sin(stride * Math.PI * 0.8) * 0.15
  leftHand.rotation.x = -0.3 + swing
  rightHand.rotation.x = -0.3 - swing
  ```

- 状态管理：新增 `handState: 'empty' | 'axe' | 'gun' | 'flamethrower'`

### 2.2 武器柜物理交互
**目标**：打开柜门后看到 3D 武器模型，点击拾取

**实施**：
- 移除武器柜面板 UI，改为 3D 场景内交互
- 柜门打开动画（旋转 90 度）：
  ```ts
  cabinetDoor.rotation.y = THREE.MathUtils.lerp(
    cabinetDoor.rotation.y, 
    isOpen ? -Math.PI : -Math.PI/2, 
    0.15
  )
  ```

- 柜内放置 3 个武器模型（简化几何体）：
  - 斧：红色楔形 + 木柄圆柱
  - 枪：灰色 L 形组合
  - 焚化罐：黄色圆柱 + 喷嘴

- 点击武器时调用 `onPickupWeapon(tool)`

---

## 三、武器系统

### 3.1 状态管理
新增状态字段：
```ts
interface GameState {
  // ... 现有字段
  equippedWeapon: Tool | null
  gunAmmo: number // 初始 12 发
  sprinklerTriggered: boolean
}
```

新增 Action：
```ts
| { type: 'EQUIP_WEAPON'; weapon: Tool }
| { type: 'USE_WEAPON' } // 对空使用
| { type: 'TRIGGER_SPRINKLER' }
```

### 3.2 对空使用效果

#### 斧头
- 动画：右手挥砍（rotation.x: 0 → -2 → 0，400ms）
- 音效：`axeSwing()` + 空气呼啸
- 无副作用

#### 手枪
- 动画：后坐力（camera shake，z 轴后退 0.05 单位）
- 音效：`gunshot()` 
- 弹药 -1，0 发时播放空击音
- 每次开枪 5% 概率触发烟雾报警器

#### 焚化罐
- 动画：火焰粒子从罐口喷出（持续 1.5s）
- 音效：`fireWhoosh()`
- 30% 概率自燃：
  - 屏幕边缘红色火焰效果
  - San -15
  - 3 秒后自动熄灭
- 50% 概率触发烟雾报警器

### 3.3 烟雾报警器
**触发条件**：开枪 / 用焚化罐

**效果**：
- 红灯闪烁：天花板 PointLight 颜色在 `0xff0000` 和 `0x000000` 之间切换（0.5s 周期）
- 报警音：440Hz 方波，间歇鸣响
- 喷水效果：
  - 粒子系统：从天花板落下的透明水滴（500 个粒子）
  - 地板反光增强（metalness +0.2）
  - 5 秒后自动停止

---

## 四、处决小游戏化

### 4.1 斧头处决 - QTE 连点
**流程**：
1. 进入瞄准模式，准星对准弱点
2. 确认后进入 QTE：屏幕提示"连续按 F 7 次（3 秒内）"
3. 进度条从左到右填充
4. 成功：一击毙命动画
5. 失败：
   - 未完成 7 次：斧头砍偏，伪人尖叫逃走
   - 时间耗尽：伪人扑过来（死亡）

**伤口表现**：
- 成功：脖子部位红色裂纹 SVG 叠加，blood_vignette 渐显
- 失败：肩膀轻微割伤，血迹飞溅

### 4.2 手枪处决 - 精准射击
**流程**：
1. 瞄准弱点（核心/太阳穴）
2. 屏幕晃动模拟心跳（amplitude 随倒计时增大）
3. 玩家需在晃动中点击射击
4. 命中判定：准星偏离弱点 < 30px
5. 成功：核心爆炸 / 头部贯穿
6. 失败：
   - 未命中弱点：身体其他部位中弹，伪人哀嚎但逃走
   - 弹药耗尽：死亡

**伤口表现**：
- 成功（核心）：胸口金属核心裂开，火花四溅
- 成功（头部）：太阳穴弹孔，液体流出
- 失败：肩膀 / 腹部弹孔，黑色液体渗出

### 4.3 焚化罐处决 - 蓄力释放
**流程**：
1. 瞄准弱点
2. 按住 F 键蓄力（进度条 0→100%，2 秒）
3. 松开释放火焰
4. 蓄力不足（<80%）：火力不够，伪人带火逃走
5. 蓄力过度（>2.5s）：罐体过热爆炸，玩家受伤 -20 San
6. 成功：伪人全身着火，炭化

**伤口表现**：
- 成功：全身烧焦纹理，smoke 粒子
- 失败：局部烧伤，伪人拍打身体逃离

### 4.4 失败音效
- **尖叫**：频率从 800Hz 扫至 1200Hz，0.8s，tremolo 颤音
- **哀嚎**：低沉 200Hz sawtooth，带呼吸感（周期性音量波动）
- **逃跑脚步**：快速 footstep 序列，音量渐弱（远离）

---

## 五、最终 Boss 战

### 5.1 触发条件
**时机**：所有访客处理完毕，原本应进入 Dawn 结局

**前兆**：
- 烟雾报警器自动触发（无玩家操作）
- 红灯闪烁加速（0.25s 周期）
- 低频震动音（30Hz sine，volume 渐增）
- 窗外出现巨大黑影（2 秒淡入）

### 5.2 Boss 外观
**SVG 生成**：`scripts/art/scenes.mjs` 新增 `bossface()`
- 1400×1000 巨型伪人脸
- 特征：
  - 三只眼（上额中央有第三只）
  - 裂开的嘴，露出多排尖牙
  - 皮肤呈灰白色，接缝处发光
  - 眼球追踪玩家位置（根据相机 x 坐标偏移瞳孔）

**撞击动画**：
- 脸部从窗外高速接近（scale: 0.5 → 1.2，0.4s）
- 玻璃 crack 纹理叠加
- 每次撞击后后退（scale: 1.2 → 0.9，0.3s）
- 间隔 2 秒循环

### 5.3 战斗流程

#### 阶段 1：指引躲藏（5 秒）
- 屏幕上方大字："躲到沙发后面！"
- 倒计时：5、4、3、2、1
- 玩家未到达 `z > 2.5` 区域：Boss 撞碎玻璃，死亡

#### 阶段 2：射击 Boss（30 秒）
- 玩家蹲在沙发后（`z > 2.5, crouching = true`）
- Boss 脸部在窗口晃动
- 必须用手枪射击脸部 3 次（任意部位）
- 每击中一次：
  - Boss 脸部出现弹孔 + 黑色液体流出
  - 尖叫音效，后退 1 秒
  - 血条显示（3/3 → 2/3 → 1/3）
- 未击中 3 次且时间耗尽：Boss 破窗而入，死亡

#### 阶段 3：门的诱惑
- Boss 血条归零后，门锁指示灯从红变绿
- 屏幕提示："门开了……"
- 玩家选择：
  - **A. 走向门**（`distance(player, door) < 1.5`）：
    - 触发第三视角动画（摄像机切到俯视角）
    - 玩家推开门，Boss 从门外伸入巨手
    - 玩家被拖出门外，黑屏
    - 死亡文案："你永远走不出这里。"
  - **B. 留在原地 10 秒**：
    - Boss 脸部逐渐消失在黑暗中
    - 红灯熄灭，恢复正常照明
    - 进入好结局

### 5.4 好结局变化
**Dawn.tsx 修改**：
- 新增 `bossDefeated: boolean` 状态
- 好结局文案追加：
  ```
  "窗外的东西离开了。你活了下来。
  墙上的时钟走到 06:00，但窗外依然是夜。
  你知道，明晚它还会来。"
  ```
- 背景图换成破碎玻璃的窗户 + 晨光（但天空依然黑暗）

---

## 六、技术实施细节

### 6.1 新增组件
```
src/ui/WeaponHUD.tsx         - 武器 UI（弹药、蓄力条）
src/ui/BossFight.tsx         - Boss 战全流程编排
src/ui/AxeQTE.tsx            - 斧头 QTE 小游戏
src/ui/GunAim.tsx            - 枪械晃动瞄准（复用 ExecutionAim）
src/ui/FlamethrowerCharge.tsx - 焚化罐蓄力条
src/scene/hands.ts           - 双手 3D 模型
src/scene/particles.ts       - 粒子系统（水、火、血）
```

### 6.2 音效新增
```ts
// audio.ts 新增函数
export function alarmBeep(): void
export function sprinkler(): void
export function scream(): void
export function wail(): void
export function flameCharge(): void
export function bossRoar(): void
export function glassBreaking(): void // 区别于 glassShatter
```

### 6.3 SVG 新增资源
```
public/assets/boss/face_neutral.svg
public/assets/boss/face_hit1.svg
public/assets/boss/face_hit2.svg
public/assets/boss/face_hit3.svg
public/assets/weapons/axe_3d.svg      - 斧头侧视图（手持用）
public/assets/weapons/gun_3d.svg
public/assets/weapons/flamethrower_3d.svg
public/assets/fx/fire_particle.svg
public/assets/fx/water_drop.svg
public/assets/fx/bullet_hole.svg
public/assets/fx/burn_mark.svg
```

### 6.4 状态机改造
```ts
// types.ts
export type Phase = 
  | 'opening' 
  | 'visitor' 
  | 'boss_intro'    // 红灯闪烁 + Boss 出现
  | 'boss_fight'    // 战斗阶段
  | 'boss_door_trap' // 门打开诱惑
  | 'dawn'

// state.ts
case 'BOSS_TRANSITION': 
  return { ...state, phase: 'boss_intro' }
case 'BOSS_DAMAGE':
  return { ...state, bossHealth: state.bossHealth - 1 }
case 'BOSS_DEFEATED':
  return { ...state, phase: 'boss_door_trap', doorUnlocked: true }
```

---

## 七、实施顺序

### Phase 1：基础设施（1-2 小时）
1. 房间布局调整（沙发前移、门重定位）
2. 双手模型基础实现
3. 状态管理扩展（武器、弹药、Boss 字段）

### Phase 2：武器系统（2-3 小时）
4. 武器柜 3D 交互
5. 武器拾取与切换
6. 对空使用效果（动画 + 音效）
7. 烟雾报警器

### Phase 3：处决小游戏（3-4 小时）
8. 斧头 QTE
9. 枪械精准射击
10. 焚化罐蓄力
11. 失败音效 + 伤口表现

### Phase 4：Boss 战（4-5 小时）
12. Boss SVG 资源生成
13. Boss 出场动画
14. 战斗流程编排
15. 门陷阱 + 第三视角动画
16. 好结局修改

### Phase 5：测试与优化（1-2 小时）
17. 端到端测试
18. 音效平衡
19. 性能优化（粒子数量）
20. Bug 修复

**总预估时间**：11-16 小时

---

## 八、风险与备选方案

### 风险 1：Three.js 性能
**粒子系统可能导致帧率下降**
- 备选：降低粒子数（500 → 200）
- 备选：使用 CSS 动画代替 3D 粒子

### 风险 2：小游戏难度
**QTE 可能过难 / 过易**
- 备选：可配置难度参数（连点次数、时间限制）
- 测试后调整数值

### 风险 3：Boss 战复杂度
**状态机分支过多，难以测试**
- 备选：简化门陷阱（直接判定距离，移除第三视角动画）
- 保留核心体验（躲藏 + 射击）

---

## 九、测试策略

### 单元测试覆盖
- `hands.test.ts`：双手模型切换
- `weapons.test.ts`：弹药计算、报警器触发概率
- `boss.test.ts`：Boss 血量、阶段转换

### 集成测试
- Boss 战完整流程（从 visitor 结束到好结局）
- 武器切换与使用
- 处决小游戏失败路径

### 手动测试清单
- [ ] 沙发后通道可正常行走
- [ ] 武器柜打开动画流畅
- [ ] 3 种处决小游戏都能完成
- [ ] Boss 战失败后可重新开始
- [ ] 门陷阱触发后死亡动画正确

---

## 十、用户体验提升点

1. **沉浸感**：第一人称双手 + 物理武器交互
2. **紧张感**：Boss 战倒计时 + 红灯闪烁
3. **风险管理**：枪弹药有限、焚化罐可能自燃
4. **多样性**：3 种处决小游戏各不相同
5. **叙事深度**：门陷阱暗示"永远的夜晚"主题

---

**计划完成，等待审批后开始实施。**
