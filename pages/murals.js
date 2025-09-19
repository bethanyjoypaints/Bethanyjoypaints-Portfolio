import Nav from '../components/Nav'
import GalleryGrid from '../components/GalleryGrid'
const demoItems = [
  { src:'/placeholders/hero1.jpg', alt:'Mural 1', caption: 'Client • Year' },
  { src:'/placeholders/hero3.jpg', alt:'Mural 2', caption: 'Client • Year' }
]
export default function Murals() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <header className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold">Murals</h1>
          <p className="mt-3">Tap any image to open a full-screen gallery.</p>
        </header>
        <GalleryGrid items={demoItems} />
      </main>
    </>
  )
}