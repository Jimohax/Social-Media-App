import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../Actions/UserAction';

const User = ({person}) => { 

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.AuthReducer.authData)
        
    const handleFollow = ()=>{
        dispatch(unFollowUser(person._id, user)) 
    }

  return (
    <div className="followers">
                    <div>
                        <img src={person.profilePicture? serverPublic + person.profilePicture : serverPublic + "profileimg.jpg"} alt="" className='followerImg' />
                        <div className="name">
                            <span>{person.firstname}</span>
                            <span>{person.username}</span>
                        </div>
                    </div>
                    <button className='button  fc-button' onClick={handleFollow} >Follow</button>
                </div>
  )
}

export default User