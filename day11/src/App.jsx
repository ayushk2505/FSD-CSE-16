import { useState } from 'react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&h=450&q=80',
    alt: 'A mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&h=450&q=80',
    alt: 'A lake surrounded by mountains',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&h=450&q=80',
    alt: 'A valley with a winding river',
  },
]

function App() {
  const [currentImage, setCurrentImage] = useState(0)

  function showPreviousImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  function showNextImage() {
    setCurrentImage((currentImage + 1) % images.length)
  }

  return (
    <main>
      <h1>Image Slider</h1>
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        width="600"
        height="338"
      />
      <p>Image {currentImage + 1} of {images.length}</p>
      <button type="button" onClick={showPreviousImage}>
        Previous
      </button>{' '}
      <button type="button" onClick={showNextImage}>
        Next
      </button>
    </main>
  )
}

export default App
