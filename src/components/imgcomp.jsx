import React from 'react'

const ImgComp = ({imgsrc, imgalt, imgw, imgh}) => {
  return (
    <img src={imgsrc} alt={imgalt} width={imgw} height={imgh}/>
  )
}

export default ImgComp