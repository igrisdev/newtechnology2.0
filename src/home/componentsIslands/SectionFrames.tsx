import { useEffect, useState } from 'react'

import { APIFrames } from '@/services/API'

import './styles.css'
import type { FrameData } from '@/env'

export const SectionFrames = () => {
  const [frames, setFrames] = useState<FrameData>([])

  useEffect(() => {
    const getFrames = async (): Promise<void> => {
      const frameData = (await APIFrames.getFrames()) || []
      setFrames(frameData)
    }
    getFrames()
  }, [])

  return (
    <div id="frames" className="min-h-[400px]">
      {frames.map(({ title, image }) => (
        <article className="overflow-hidden rounded-md shadow-md hover:scale-[102%] hover:shadow-local_accent transition-all duration-300">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </article>
      ))}
    </div>
  )
}
