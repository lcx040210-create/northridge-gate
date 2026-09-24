import type { Visitor } from '../schema'
import { v1Human } from './v1-human'
import { v2Skinfit } from './v2-skinfit'
import { v3Suspicious } from './v3-suspicious'
import { v4Coretick } from './v4-coretick'

export const VISITORS: Visitor[] = [v1Human, v2Skinfit, v3Suspicious, v4Coretick]
