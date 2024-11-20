
import React, { useState } from 'react';

const DisplayName = () => {
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const firstNameInput = e.target.firstname;
    const lastNameInput = e.target.lastname;

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    // Reset custom validity messages
    firstNameInput.setCustomValidity('');
    lastNameInput.setCustomValidity('');

    if (!firstName) {
      setFullName('')
      firstNameInput.setCustomValidity('Please fill out this field.');
      firstNameInput.reportValidity(); // Show the popup message
      return;
    }

    if (!lastName) {
      setFullName('')
      lastNameInput.setCustomValidity('Please fill out this field.');
      lastNameInput.reportValidity(); // Show the popup message
      return;
    }

    // Clear fullName state if validation passes
    setFullName(`${firstName} ${lastName}`);
  };
  const handleInput = (e) => {
    e.target.setCustomValidity(''); // Clear the custom validity message when user types
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input id="firstname" name="firstname" type="text" onInput={handleInput}/>
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input id="lastname" name="lastname" type="text"  onInput={handleInput}/>
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName === '' ? (<p></p>) : (<p>Full Name: {fullName}</p>)}
    </div>
  );
};

export default DisplayName;
