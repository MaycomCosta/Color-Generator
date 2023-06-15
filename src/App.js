import React, { useState } from "react"
import * as C from './styles.js'

import SingleColor from './components/SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

const handleSubmit = (e) => {
  e.preventDefault()
  try {
    let colors = new Values(color).all(10)
    setList(colors)
  } catch (error) {
    setError(true)
    console.log(error)
  }
}

  return (
    <>
      <C.SectionContainer>
        <h3>color generator</h3>
        <C.Form onSubmit={handleSubmit}>
          <input 
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
          className={`${error ? 'error' : 'success'}`}
          />
          <C.Button type='submit'>
            submit
          </C.Button>
        </C.Form>
      </C.SectionContainer>
      <C.SectionColors>
        {list.map((color, index) => {
            return (
              <SingleColor 
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            )
          })}
      </C.SectionColors>
    </>
  )
}

export default App
