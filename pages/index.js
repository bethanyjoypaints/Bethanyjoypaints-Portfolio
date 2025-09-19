import Nav from '../components/Nav'
import HeroCarousel from '../components/HeroCarousel'
import Link from 'next/link'
export default function Home() {
  const heroImgs = ['/placeholders/hero1.jpg','/placeholders/hero2.jpg','/placeholders/hero3.jpg']
  return (
    <>
      <Nav />
      <main>
        <HeroCarousel images={heroImgs} />
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Scenic Charge Jobs</h2>
            <p className="mt-3">Short intro about your scenic charge work.</p>
            <Link href="/scenic" className="inline-block mt-4 border px-4 py-2">View Scenic Charge</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Latest Backdrop</h2>
            <img src="/placeholders/hero2.jpg" alt="" className="mt-4 rounded shadow" />
          </div>
        </div>
      </main>
    </>
  )
}