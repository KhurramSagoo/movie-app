import React, { useState } from "react";
const CheckTwo = () => {
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const fullName = first + " " + last;

  function handleChangeF(e) {
    setfirst(e.target.value);
  }
  function handleChangeL(e) {
    setlast(e.target.value);
  }
  return (
    <>
      <h1>Let's Check you in</h1>
      <p>
        First Name: <input type="text" value={first} onChange={handleChangeF} />
      </p>
      <p>
        Last Name: <input type="text" value={last} onChange={handleChangeL} />
      </p>
      <p>Your ticket will be issued to : {fullName}</p>
    </>
  );
};

export default CheckTwo;
