import { useEffect, useState } from 'react'
import type { VoiceKind } from '../data/schema'
import { voiceBlip } from '../scene/audio'

// 打字机：逐字显示并按音色发"说话声"
export function useTypewriter(text: string, voice: VoiceKind = 'human', glitch = false, speed = 45): { shown: string; done: boolean } {
  const [n, setN] = useState(0)
  useEffect(() => {
    setN(0)
    if (!text) return
    let i = 0
    let t = 0
    const step = () => {
      i++
      setN(i)
      const ch = text[i - 1]
      if (i % 2 === 1 && ch && !/[\s，。、！？…—「」,.!?]/.test(ch)) voiceBlip(voice, glitch)
      if (i < text.length) t = window.setTimeout(step, /[，。！？…,.!?]/.test(ch) ? speed * 5 : speed)
    }
    t = window.setTimeout(step, speed)
    return () => clearTimeout(t)
  }, [text, voice, glitch, speed])
  return { shown: text.slice(0, n), done: n >= text.length }
}

export default function Typewriter({ text, voice, glitch, className }: { text: string; voice?: VoiceKind; glitch?: boolean; className?: string }) {
  const { shown, done } = useTypewriter(text, voice, glitch)
  return <p className={`${className ?? 'line'}${done ? '' : ' caret'}`}>{shown}</p>
}
