import React, { useState } from 'react'

function Button(props) {
  const [toggle, setToggle] = useState(false)
  let display = ''
  if (toggle == true) {
    display = 'block'
  } else {
    display = 'none'
  }
  return (
    <div className="descriptionToggle">
    <button onClick={() => setToggle(!toggle)}>{props.title}</button>
    <div className="description" style={{ display: display }}>
      <p>{props.texte}</p>
    </div>
  </div>
  )
}

export default Button
