import Nav from '../components/Nav'
import GalleryGrid from '../components/GalleryGrid'
const demoItems = [
  { src:'/placeholders/hero2.jpg', alt:'Backdrop 1', caption: 'Venue • Year' },
  { src:'/placeholders/hero3.jpg', alt:'Backdrop 2', caption: 'Venue • Year' }
]
export default function Backdrops() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <header className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold">Backdrops</h1>
          <p className="mt-3">Swipe through each project in a lightbox.</p>
        </header>
        <GalleryGrid items={demoItems} />
      </main>
    </>
  )
}