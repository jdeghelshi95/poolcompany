import React from 'react'
import PicGallery from '../components/PicGallery'
import NewGall from "../components/NewGallery.jsx"

const Gallery = () => {
  return (
    <div className='flex '>
    <div className='w-full justify-items-center pt-10'>
    <div className='w-1/2'>
      <NewGall/>
    </div>
    {/* <PicGallery/> */}
    </div>
    </div>
  )
}

export default Gallery