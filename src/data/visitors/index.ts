import type { Visitor } from '../schema'
import { v1Human } from './v1-human'
import { v2Skinfit } from './v2-skinfit'
import { v4Coretick } from './v4-coretick'

// v3 暂缺，Task 8 补上；先以占位空数组维护顺序
export const VISITORS: Visitor[] = [v1Human, v2Skinfit, v4Coretick]
