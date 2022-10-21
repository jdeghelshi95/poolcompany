import React from 'react'
import ImageGallery from 'react-image-gallery';

const images  = [
    {
    original: "https://i.imgur.com/CHTchrk.png",
    thumbnail: "https://i.imgur.com/CHTchrk.png",
    },
    {
    original: "https://i.imgur.com/gwiALgm.png",
    thumbnail: "https://i.imgur.com/gwiALgm.png",
    },
    {
        original: 'https://i.imgur.com/VqN6wpE.png',
        thumbnail: 'https://i.imgur.com/VqN6wpE.png'
        
    }
]

const Gallery = () => {




  return (
    <div className='w-7/12'>
        <ImageGallery items={images} />
    </div>
  )
}

export default Gallery