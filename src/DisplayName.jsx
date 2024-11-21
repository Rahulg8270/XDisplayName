
// import React, { useState } from 'react';

// const DisplayName = () => {
//   const [fullName, setFullName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     console.log('form is submitted')
//     const firstNameInput = e.target.firstname;
//     const lastNameInput = e.target.lastname;

//     const firstName = firstNameInput.value.trim();
//     const lastName = lastNameInput.value.trim();

//     // Reset custom validity messages
//     firstNameInput.setCustomValidity('');
//     lastNameInput.setCustomValidity('');

//     if (!firstName) {
//       setFullName('')
//       firstNameInput.setCustomValidity('Please fill out this field.');
//       firstNameInput.reportValidity(); // Show the popup message
//       return;
//     }

//     if (!lastName) {
//       setFullName('')
//       // lastNameInput.setCustomValidity('Please fill out this field.');
//       // lastNameInput.reportValidity(); // Show the popup message
//       return;
//     }

//     // Clear fullName state if validation passes
//     setFullName(`${firstName} ${lastName}`);
//   };
//   const handleInput = (e) => {
//     e.target.setCustomValidity(''); // Clear the custom validity message when user types
//   };

//   return (
//     <div>
//       <h1>Full Name Display</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstname">First Name:</label>
//         <input id="firstname" name="firstname" type="text" onInput={handleInput} required/>
//         <br />
//         <label htmlFor="lastname">Last Name:</label>
//         <input id="lastname" name="lastname" type="text"  onInput={handleInput} required/>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {fullName === '' ? (<p></p>) : (<p>Full Name: {fullName}</p>)}
//     </div>
//   );
// };

// export default DisplayName;



import React, { useState, useRef } from 'react';

const DisplayName = () => {
  const [fullName, setFullName] = useState('');
  const firstNameRef = useRef(null); // Reference for the first name input
  const lastNameRef = useRef(null); // Reference for the last name input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('form is submitted')
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();

    if (!firstName || !lastName) {
      setFullName(''); // Reset fullName if any field is empty
      return; // The form won't submit due to the `required` attribute
    }

    setFullName(firstName+ " " +lastName); // Set the full name if both fields are valid
  };

  const handleInput = () => {
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();

    // Dynamically update the fullName or reset it when any field is empty
    if (!firstName || !lastName) {
      setFullName('');
    } 
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        First Name:
        <input
          id="firstname"
          name="firstname"
          type="text"
          ref={firstNameRef} // Attach ref
          onInput={handleInput} // Handle input changes
          required
        />
        <br />
        Last Name:
        <input
          id="lastname"
          name="lastname"
          type="text"
          ref={lastNameRef} // Attach ref
          onInput={handleInput} // Handle input changes
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName === '' ? <p></p> : <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default DisplayName;

