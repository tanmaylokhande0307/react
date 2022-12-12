import React from 'react';

const User = ({user}) => {
    const { avatar_url,login,id } = user;
  return (
    <div className='user'>
      <div className="image">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-info">
        <h3>{login}</h3>
        <small>{id}</small>
      </div>
    </div>
  )
}

export default User
