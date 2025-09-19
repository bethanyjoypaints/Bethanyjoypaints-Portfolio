import Nav from '../components/Nav'
export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-20 max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <img src="/placeholders/hero1.jpg" alt="Headshot" className="w-40 h-40 object-cover rounded"/>
          <div>
            <h1 className="text-3xl font-bold">About</h1>
            <p className="mt-4">Your bio and artist statement goes here. Contact: your.email@example.com</p>
          </div>
        </div>
      </main>
    </>
  )
}