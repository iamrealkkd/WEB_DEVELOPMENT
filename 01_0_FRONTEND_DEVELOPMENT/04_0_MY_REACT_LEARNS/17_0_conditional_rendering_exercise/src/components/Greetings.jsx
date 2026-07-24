import React from 'react'

const Greetings = ({timeofDay}) => {
 return timeofDay == "morning" ? (
    <h1>Good Morning!</h1>
  ) : (
    <h1>Good Night!</h1>
  );
}

export default Greetings
