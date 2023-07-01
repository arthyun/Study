'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
        </div>

        <style jsx>
        {`
            .embla {
                overflow: hidden;
            }
            .embla__container {
                display: flex;
            }
            .embla__slide {
                flex: 0 0 100%;
                min-width: 0;
            }              
        `}
        </style>
    </div>
    )
}
