import React, { useContext } from 'react'
import { data } from '../App';
import { data1 } from '../App';
function ChildC() {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <div>
      <h1> hi my name is {name} and my gender is {gender}</h1>
    </div>
  )
}

export default ChildC
