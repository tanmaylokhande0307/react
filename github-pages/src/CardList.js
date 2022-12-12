import React from 'react';
import User from "./User";


const CardList = ({users}) => {
  return (
    <div>
{users ? users.map(user => {
                    return <User user={user} key={user.id}/>
                
                }):<h2>User not found</h2>}
    </div>
  )
}

export default CardList
