import type { Execution, Tool } from './schema'

export const EXECUTIONS: Record<Tool, Execution> = {
  axe: {
    tool: 'axe',
    frames: ['/assets/exec/exec_axe_1.png', '/assets/exec/exec_axe_2.png', '/assets/exec/exec_axe_3.png', '/assets/exec/exec_axe_4.png'],
    residue: '/assets/env/window_residue_axe.png',
    onSuccess: { san: 0, radioDistort: true },
    onFailure: { san: -10, escaped: true },
  },
  gun: {
    tool: 'gun',
    frames: ['/assets/exec/exec_gun_1.png', '/assets/exec/exec_gun_2.png', '/assets/exec/exec_gun_3.png', '/assets/exec/exec_gun_4.png'],
    residue: '/assets/env/window_residue_gun.png',
    onSuccess: { san: -5, radioDistort: false },
    onFailure: { san: -5, escaped: true },
  },
  fire: {
    tool: 'fire',
    frames: ['/assets/exec/exec_fire_1.png', '/assets/exec/exec_fire_2.png', '/assets/exec/exec_fire_3.png', '/assets/exec/exec_fire_4.png'],
    residue: '/assets/env/window_residue_fire.png',
    onSuccess: { san: 0, radioDistort: false },
    onFailure: { san: -5, escaped: true },
  },
}
