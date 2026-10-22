import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSdY9WXJQkSwb2bR28onjrMWwqnBcM8SLldTRkSP28WcpplTt5gZ9Jn4&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnErQsq6aDcTd2dZN8DKclP4CTWlYfvYlrgA07BrGdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuMX1xD5CirCyVq9aCjHKnU-kQ5CMIdAcd78hvYxtumDMaMFfvNVzdsY&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnErQsq6aDcTd2dZN8DKclP4CTWlYfvYlrgA07BrGdg&s"
  ]
  useEffect(() => {
    const interval = setInterval(() =>
      setIndex((prevIndex) => (prevIndex + 1) % images.length), 2000);
    return () => clearInterval(interval)
  }, [])
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Image Slider</h1>
      <img
        src={images[index]}
        alt="img-here"
        style={{ height: "200px", width: "200px" }}
      ></img>
    </div>
  )
}

export default ImageSlider