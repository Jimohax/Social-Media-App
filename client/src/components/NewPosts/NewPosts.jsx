import React from 'react'
import './NewPosts.css'

import NewPost from '../NewPost/NewPost'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../Actions/PostAction'

const NewPosts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.AuthReducer.authData)
  const {posts, loading} = useSelector((state)=> state.PostReducer )

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  }, [])
  return (
    <div className="NewPosts">
         {loading? "Fetching posts..." :
         posts.map((post, id)=>{
            return <NewPost 
            data={post}
            id={id}
            />
         })}
    </div>
  )
}

export default NewPosts