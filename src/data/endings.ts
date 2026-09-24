import type { Ending } from './schema'

export const ENDINGS: Ending[] = [
  { id: 'passed', condition: '误判 ≤1，且无放走须火/须枪之体', lines: ['这一夜，你盖对了大多数章。', '天亮了。'] },
  { id: 'contaminated', condition: '任一伪人进门，或翻牌为伪人', lines: ['有什么东西，已经进去了。', '天亮了，但设施不再是干净的了。'] },
  { id: 'unclean', condition: '曾 San<15 且误杀 ≥1', lines: ['镜子里的你，眨了眨眼。', '另一只眼睛慢了一帧。'] },
]
