import React from 'react'

const PicGallery = () => {
  return (
    <div>
    <section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.imgur.com/bH914xK.png"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.imgur.com/gwiALgm.png"/>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.imgur.com/x2sFYLf.png"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.imgur.com/VqN6wpE.png"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.imgur.com/r09gO94.png"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.imgur.com/PYovCce.png"/>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </div>
  )
}

export default PicGallery

