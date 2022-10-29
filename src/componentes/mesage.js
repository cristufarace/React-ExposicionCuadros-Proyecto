import React from 'react'

const Mesage = ({msg, bgcolor}) => {
  let styles ={
    // padding : 1,
    color: "white",
    margin: 10,
    marginBottom: "1rem",
    borderRadius: 10,
    backgroundColor: bgcolor
  }
  return (
    <div style={styles} >
      <p>{msg}</p>
    </div>
  )
}

export default Mesage