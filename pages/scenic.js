import Nav from '../components/Nav'
import GalleryGrid from '../components/GalleryGrid'
const demoItems = [
  { src:'/placeholders/hero1.jpg', alt:'Project 1', caption: 'Show • Theatre • Year' },
  { src:'/placeholders/hero2.jpg', alt:'Project 2', caption: 'Show • Theatre • Year' },
  { src:'/placeholders/hero3.jpg', alt:'Project 3', caption: 'Show • Theatre • Year' }
]
export default function Scenic() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <header className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold">Scenic Charge</h1>
          <p className="mt-3">Each project opens into a swipeable gallery without leaving the page.</p>
        </header>
        <GalleryGrid items={demoItems} />
      </main>
    </>
  )
}