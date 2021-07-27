import React, { useState } from 'react';
import Team from './Team';

const App = () => {
  const [nameA, setNameA] = useState("team_A")
  const [nameB, setNameB] = useState("team_B")
  return (
    <>
      <div>
        <h1>Hello!! Competition_APP!!</h1>
        <h2> {nameA}  vs {nameB}  </h2>
        <p>team_A</p>
        <button onClick={() => {setNameA('team1')}}>team1</button>
        <button onClick={() => {setNameA('team2')}}>team2</button>
        <button onClick={() => {setNameA('team3')}}>team3</button>
        <button onClick={() => {setNameA('team4')}}>team4</button>
        <p>team_B</p>
        <button onClick={() => {setNameB('team1')}}>team1</button>
        <button onClick={() => {setNameB('team2')}}>team2</button>
        <button onClick={() => {setNameB('team3')}}>team3</button>
        <button onClick={() => {setNameB('team4')}}>team4</button>
      </div>
    </>
  )
}

export default App;