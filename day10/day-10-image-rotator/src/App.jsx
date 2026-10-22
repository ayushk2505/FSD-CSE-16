import { useState, useEffect } from 'react'

function App() {
  const images = [
    'https://picsum.photos/id/10/400/300',
    'https://picsum.photos/id/20/400/300',
    'https://picsum.photos/id/30/400/300',
    'https://picsum.photos/id/40/400/300',
  ]

  const [index, setIndex] = useState(0)

  // auto rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  function next() {
    setIndex((index + 1) % images.length)
  }

  function prev() {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <div>
      <h1>Image Rotator</h1>
      <img src={images[index]} alt="rotating" />
      <br />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default App
