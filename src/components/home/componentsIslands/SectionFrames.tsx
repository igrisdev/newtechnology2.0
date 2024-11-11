import type { FrameData } from '@/env'

import { useState } from 'react'

import './styles.css'

export const SectionFrames = ({ framesData }: { framesData: FrameData }) => {
  const [frames] = useState<FrameData>(framesData)

  return (
    <div id="frames" className="min-h-[400px]">
      {frames.map(({ title, image }, index) => (
        <article
          className="overflow-hidden rounded-md shadow-md hover:shadow-local_accent transition-all duration-300 aspect-square w-full h-full"
          key={title + index}
        >
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </article>
      ))}
    </div>
  )
}
