import React, { useState } from 'react';


const MyAccordion = ({title,content}) => {
  const [show, setShow] = useState(false)
  return (
    <>
    <div>

    <h2>{title}</h2>
    <button onClick={()=>{setShow(!show)}}>{show? "-" : "+"}</button>
    </div>
    {show && <p>{content}</p>}
    </>
  )
}

export default MyAccordion