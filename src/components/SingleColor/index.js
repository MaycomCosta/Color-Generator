import React, { useState } from 'react'
import * as C from './styles'
import rgbToHex from '../../Utils'


function Categories ({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  // eslint-disable-next-line
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`


  return (
    <C.Article
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hexColor)
    }}
    >
     <p className={` ${index > 10 ? 'color-light' : 'percent-value'}`}>{weight}%</p>
      <p className={` ${index > 10 ? 'color-light' : 'color-value'}`}>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </C.Article>
  )
}

export default Categories
