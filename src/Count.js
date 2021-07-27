import React, { useState } from 'react';
import Team from './Team';

const Count = () => {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  return (
    <>
      <div>
        <h1>
          <Team />{countA}
        </h1>
        <button onClick = {() => {setCountA(countA + 1)}}>+1</button>
        <button onClick = {() => {setCountA(countA + 5)}}>+5</button>
        <button onClick = {() => {setCountA(countA + 10)}}>+10</button>
        <br></br>
        <button onClick = {() => {setCountA(countA - 1)}}>-1</button>
        <button onClick = {() => {setCountA(countA - 5)}}>-5</button>
        <button onClick = {() => {setCountA(countA - 10)}}>-10</button>
        <h1>
          {countB}
        </h1>
        <button onClick = {() => {setCountB(countB + 1)}}>+1</button>
        <button onClick = {() => {setCountB(countB + 5)}}>+5</button>
        <button onClick = {() => {setCountB(countB + 10)}}>+10</button>
        <br></br>
        <button onClick = {() => {setCountB(countB - 1)}}>-1</button>
        <button onClick = {() => {setCountB(countB - 5)}}>-5</button>
        <button onClick = {() => {setCountB(countB - 10)}}>-10</button>
        
      </div>
    </>
  );
}

export default Count;