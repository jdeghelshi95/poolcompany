import React from 'react'
import ImageGallery from 'react-image-gallery';

const images  = [
    {
    original: "https://i.imgur.com/wOcsb1P.jpg",
    thumbnail: "https://i.imgur.com/wOcsb1P.jpg",
    },
    {
    original: "https://i.imgur.com/Qce8IsJ.jpg",
    thumbnail: "https://i.imgur.com/Qce8IsJ.jpg",
    },
    {
    original: 'https://i.imgur.com/Ji8x1ha.jpg',
    thumbnail: 'https://i.imgur.com/Ji8x1ha.jpg' 
    },
    {
      original: 'https://i.imgur.com/MTHLTZy.jpg',
      thumbnail: 'https://i.imgur.com/MTHLTZy.jpg' 
    },
]

const Gallery = () => {




  return (
    <div className='lg:w-6/12 sm:w-full'>
        <ImageGallery items={images} />
    </div>
  )
}

export default Gallery