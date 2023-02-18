import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
 
import User from "../User/User";
import { getAllUser } from "../../API/UserRequest";
import {useSelector} from "react-redux"


const FollowersCard = () => {
    const [persons, setPersons] = useState([]);
    const { user } = useSelector((state) => state.AuthReducer.authData);

	useEffect(() => {
		const fetchPerson = async () => {
			const { data } = await getAllUser();
			setPersons(data);
            console.log(data);
		};
		fetchPerson();
	}, []);
	return (
		<div className="FollowersCard">
			<h3>People you may know</h3>

			{persons.map((person, id) => {
                if (person._id !== user._id){
                    return <User person={person} key={id} />;
                }
				
			})}
		</div>
	);
};

export default FollowersCard;
