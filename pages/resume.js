import Nav from '../components/Nav'
export default function Resume() {
  return (
    <>
      <Nav />
      <main className="pt-20 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="mt-4">Download or view the PDF below.</p>
        <div className="mt-6">
          <a href="/resume/Resume.pdf" download className="inline-block px-4 py-2 border">Download Resume (PDF)</a>
        </div>
        <div className="mt-8">
          <iframe src="/resume/Resume.pdf" style={{width:'100%', height:'600px'}}></iframe>
        </div>
      </main>
    </>
  )
}