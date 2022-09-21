import React, { useState } from 'react'

function Button(props) {
  const [toggle, setToggle] = useState(false)
  let display = ''
  if (toggle == true) {
    display = 'block'
  } else {
    display = 'none'
  }
  return <button onClick={() => setToggle(!toggle)}>{props.title}</button>
}

export default Button
