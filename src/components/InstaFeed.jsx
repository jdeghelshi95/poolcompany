import React from 'react'
import InstagramEmbed from "react-instagram-embed"

const InstaFeed = () => {
  return (
    <div>
    <InstagramEmbed
  url='https://www.instagram.com/bairespoolplastering/?hl=en'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
    
    
    
    </div>






  )
}

export default InstaFeed