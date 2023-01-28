import React from 'react'
import './NewPosts.css'
import { PostsData } from '../../Data/PostData'
import NewPost from '../NewPost/NewPost'

const NewPosts = () => {
  return (
    <div className="NewPosts">
         {PostsData.map((post, id)=>{
            return <NewPost 
            data={post}
            id={id}
            />
         })}
    </div>
  )
}

export default NewPosts