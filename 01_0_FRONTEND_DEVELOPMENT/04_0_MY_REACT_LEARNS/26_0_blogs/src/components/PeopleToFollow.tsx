import React from 'react'
import UserCard from './UserCard';
const peopleToFollow = [
    {name: "Krishna", following: false},
    {name: "Nikhlesh", following: true},
    {name: "Rathore", following: false},
    {name: "Abhikr", following: false},
]; 
const PeopleToFollow = () => {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h3 className='font-semibold text-lg mb-4'></h3>
      <div className='space-y-4'>
           {peopleToFollow.map((person, index) => (
            <UserCard key={index} person={person}/>
           ))}
      </div>
    </div>
  )
}

export default PeopleToFollow
