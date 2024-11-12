import React, { useState } from 'react'

const DisplayName = () => {
  const [fullName,setFullName] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const firstName = `${e.target[0].value}`;
    const lastName = `${e.target[1].value}`;
    setFullName(`${firstName} ${lastName}`)
  }
  return (
    <div>
        <h1>Full Name Display</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="firstname">First Name:</label>
            <input id='firstname' type="text" required />
            <br />
            <label htmlFor="lastname">Last Name:</label>
            <input id='lastname' type="text" required/>
            <br />
            <button type='submit'>Submit</button>
        </form>
        <p>Full Name: {fullName}</p>
    </div>
  )
}

export default DisplayName