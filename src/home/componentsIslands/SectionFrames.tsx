import type { FrameData } from '@/env'

import { useEffect, useState } from 'react'

// import { APIFrames } from '@/services/API'

import './styles.css'

export const SectionFrames = ({ framesData }: { framesData: FrameData }) => {
  const [frames] = useState<FrameData>(framesData)

  // useEffect(() => {
  //   const getFrames = async (): Promise<void> => {
  //     const frameData = (await APIFrames.getFrames()) || []
  //     setFrames(frameData)
  //   }
  //   getFrames()
  // }, [])

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
