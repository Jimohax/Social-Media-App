import React from "react";
import { useSelector } from "react-redux";

// import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = ({location}) => {
	const { user } = useSelector((state) => state.AuthReducer.authData);
	const posts = useSelector((state)=>state.PostReducer.posts)
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	
	return (
		<div className="ProfileCard">
			<div className="ProfileImages">
				<img
					src={
						user.coverPicture
							? serverPublic + user.coverPicture
							: serverPublic + "cover.jpg"
					}
					alt=""
				/>
				<img
					src={
						user.profilePicture
							? serverPublic + user.profilePicture
							: serverPublic + "profileimg.jpg"
					}
					alt=""
				/>
			</div>
			<div className="ProfileName">
				<span>
					{user.firstname} {user.lastname}
				</span>
				<span>
					{user.worksAt ? user.worksAt : "Where do you work?"}
				</span>
			</div>

			<div className="followStatus">
				<hr />
				<div>
					<div className="follow">
						<span>{user.following.length}</span>
						{console.log(user.following.length)}
						<span>following</span>
					</div>
					<div className="vl"></div>
					<div className="follow">
						<span>{user.followers.length}</span>
						<span>followers</span>
					</div>

					{location === "profilePage" && (
						<>
							<div className="vl"></div>
							<div className="follow">
								<span>{posts.filter((post)=> post.userId === user._id).length}</span>
								<span>posts</span>
							</div>
						</>
					)}
				</div>
				<hr />
			</div>
			{location === "profilePage" ? (
				""
			) : (
				<span>
					<Link style={{textDecoration : "none", color: "inherit"}} to={`/profile/${user._id}`}>My Profile </Link>
				</span>
			)}
		</div>
	);
};

export default ProfileCard;
