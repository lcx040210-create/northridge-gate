import type { Tool } from '../data/schema'
import type { GameState } from '../engine/types'

export default function WeaponHUD({ state }: { state: GameState }) {
  const { equippedWeapon, gunAmmo } = state

  if (!equippedWeapon) return null

  return (
    <div style={{ position: 'absolute', bottom: 80, right: 24, background: 'rgba(0,0,0,0.75)', padding: '12px 16px', borderRadius: 6, color: '#e8e2cc', minWidth: 140 }}>
      <div style={{ fontSize: 11, color: '#9a9a90', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>EQUIPPED</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={`./assets/icons/${equippedWeapon}.svg`} alt="" style={{ width: 36, height: 36 }} />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: 15 }}>
            {equippedWeapon === 'axe' && 'FIRE AXE'}
            {equippedWeapon === 'gun' && 'HANDGUN'}
            {equippedWeapon === 'fire' && 'INCINERATOR'}
          </div>
          {equippedWeapon === 'gun' && (
            <div style={{ fontSize: 13, color: gunAmmo === 0 ? '#d04030' : '#e0b050', marginTop: 2 }}>
              AMMO: {gunAmmo}/12
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 11, color: '#8a8a80', marginTop: 8, borderTop: '1px solid #3a3a32', paddingTop: 6 }}>
        F TO USE
      </div>
    </div>
  )
}
