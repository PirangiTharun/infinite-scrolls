import React from 'react';
import '../App.css';

const UserCard = ({record}) => {
    
  return (
    <div className='container'>
        <img src={record.picture.large} alt="" />
        <p className='userName'>{record.name.title} {record.name.first} {record.name.last}</p>
        <p>{record.gender}</p>
        <p>{record.phone}</p>
    </div>
  )
}

export default UserCard;