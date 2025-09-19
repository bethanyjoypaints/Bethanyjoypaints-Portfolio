import { useEffect, useState } from 'react'
export default function Lightbox({ items, startIndex=0, onClose }) {
  const [i, setI] = useState(startIndex)
  useEffect(() => {
    function onKey(e){
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setI(n => Math.min(n+1, items.length-1))
      if (e.key === 'ArrowLeft') setI(n => Math.max(n-1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [items.length, onClose])
  if (!items?.length) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
      <button onClick={onClose} className="absolute top-6 right-6 text-white text-xl">✕</button>
      <div className="max-w-5xl w-full">
        <img src={items[i].src} alt={items[i].alt||''} className="w-full h-[60vh] object-contain" />
        <div className="mt-4 text-white flex items-center justify-between">
          <div>{items[i].caption}</div>
          <div className="space-x-3">
            <button onClick={() => setI(n => Math.max(n-1, 0))} className="px-3 py-1 bg-white/10 rounded">◀</button>
            <button onClick={() => setI(n => Math.min(n+1, items.length-1))} className="px-3 py-1 bg-white/10 rounded">▶</button>
          </div>
        </div>
      </div>
    </div>
  )
}