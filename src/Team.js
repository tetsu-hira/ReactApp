import React, { useState } from 'react';
import App from './App'

const Team = () => {
  const [ teamA, setTeamA ] = useState('teamA')
  const [ teamB, setTeamB ] = useState('teamB')
  
  return (
    <>
      <div className="Team">
        <div className="TeamName">{teamA}</div>
      </div>
    </>
  );
}

export default Team;