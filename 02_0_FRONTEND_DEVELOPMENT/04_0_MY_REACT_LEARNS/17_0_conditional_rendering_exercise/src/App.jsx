import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greetings from './components/Greetings'

const App = () => {
  return (
    <div>
      {/* <Weather /> */}
      {/* <UserStatus loggedIn={true} isAdmin={true} /> */}
      <Greetings timeofDay="morning" />
    </div>
  )
}

export default App
