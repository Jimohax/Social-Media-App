import React from 'react'
import './NewPost.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'




const NewPost = ({data}) => {

  const {user} = useSelector((state)=>state.AuthReducer.authData)
  return (
    <div className="NewPost">
        <img src={data.image?  process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

       

        <div className="postReact">
            <img src={data.liked? Like : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: "var(--gray)", fontSize:"12px"}}>{data.likes} likes</span>
        <div className="detail">
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
          {/* <span> {data.image}</span> */}
          {console.log(data.image)}
        </div>
        
    </div>
  )
}

export default NewPost