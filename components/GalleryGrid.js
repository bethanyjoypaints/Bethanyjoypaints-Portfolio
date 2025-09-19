import { useState } from 'react'
import Lightbox from './Lightbox'
export default function GalleryGrid({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(-1)
  if (!items.length) return <div className="p-8 text-center">No items yet</div>
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((img, i) => (
          <button key={i} onClick={() => setOpenIndex(i)} className="block">
            <img src={img.src} alt={img.alt||''} className="w-full h-44 object-cover rounded" />
          </button>
        ))}
      </div>
      {openIndex>=0 && <Lightbox items={items} startIndex={openIndex} onClose={() => setOpenIndex(-1)} />}
    </section>
  )
}