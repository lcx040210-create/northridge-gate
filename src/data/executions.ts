import type { Execution, Tool } from './schema'

export const EXECUTIONS: Record<Tool, Execution> = {
  axe: {
    tool: 'axe',
    frames: ['/assets/exec/exec_axe_1.svg', '/assets/exec/exec_axe_2.svg', '/assets/exec/exec_axe_3.svg', '/assets/exec/exec_axe_4.svg'],
    residue: '/assets/env/window_residue_axe.svg',
    onSuccess: { san: 0, radioDistort: true },
    onFailure: { san: -10, escaped: true },
  },
  gun: {
    tool: 'gun',
    frames: ['/assets/exec/exec_gun_1.svg', '/assets/exec/exec_gun_2.svg', '/assets/exec/exec_gun_3.svg', '/assets/exec/exec_gun_4.svg'],
    residue: '/assets/env/window_residue_gun.svg',
    onSuccess: { san: -5, radioDistort: false },
    onFailure: { san: -5, escaped: true },
  },
  fire: {
    tool: 'fire',
    frames: ['/assets/exec/exec_fire_1.svg', '/assets/exec/exec_fire_2.svg', '/assets/exec/exec_fire_3.svg', '/assets/exec/exec_fire_4.svg'],
    residue: '/assets/env/window_residue_fire.svg',
    onSuccess: { san: 0, radioDistort: false },
    onFailure: { san: -5, escaped: true },
  },
}
