import { useEffect, useState } from 'react'
import clsx from 'clsx'
export default function HeroCarousel({ images = [], interval = 4000 }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (!images.length) return
    const t = setInterval(() => setIdx(i => (i+1)%images.length), interval)
    return () => clearInterval(t)
  }, [images, interval])
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {images.map((src,i)=>(
        <div key={i}
          className={clsx("absolute inset-0 bg-center bg-cover transition-opacity duration-700", i===idx?"opacity-100":"opacity-0")}
          style={{backgroundImage:`url(${src})`}}
        />
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold">Bethany Joy Paints</h1>
        <p className="mt-4">Scenic Artist • Murals • Backdrops</p>
      </div>
    </div>
  )
}