import React from 'react'
import sanjay1 from '../assest/sanjay1.jpg';
const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='title'>Sanjay Mandal</p>
        <img id='user-img' src={sanjay1} alt='sanjay'></img>
        <p id='user-dec'>Description of Sanjay Mandal</p>
    </div>
  )
}

export default UserCard