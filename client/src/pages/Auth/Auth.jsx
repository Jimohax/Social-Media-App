import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction";

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(true);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.AuthReducer.loading);
	console.log(loading);
	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		password: "",
		confirmpass: "",
		username: "",
	});

	const [confirmPass, setConfirmPass] = useState(true);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignUp) {
			data.password === data.confirmpass
				? dispatch(signUp(data))
				: setConfirmPass(false);
		} else {
			dispatch(logIn(data));
		}
	};

	const resetForm = () => {
		setConfirmPass(true);
		setData({
			firstname: "",
			lastname: "",
			password: "",
			confirmpass: "",
			username: "",
		});
	};
	return (
		// left side
		<div className="Auth">
			<div className="A-left">
				<img src={Logo} alt="" background-color="red" />
				<div className="webName"> 
					<h1>SociApp</h1>
					<h6>Jump outside the box</h6>
				</div>
			</div>

			{/* right side */}
			<div className="A-right">
				<form
					action=""
					className="infoForm authForm"
					onSubmit={handleSubmit}
				>
					<h3>{isSignUp ? "Sign up" : "Log in"}</h3>

					{isSignUp && (
						<div>
							<input
								type="text"
								placeholder="First Name"
								className="infoInput"
								name="firstname"
								onChange={handleChange}
								value={data.firstname}
							/>
							<input
								type="text"
								placeholder="Last Name"
								className="infoInput"
								name="lastname"
								onChange={handleChange}
								value={data.lastname}
							/>
						</div>
					)}

					<div>
						<input
							type="text"
							placeholder="User Name"
							className="infoInput"
							name="username"
							onChange={handleChange}
							value={data.username}
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Password"
							className="infoInput"
							name="password"
							onChange={handleChange}
							value={data.password}
						/>
						{isSignUp && (
							<input
								type="password"
								placeholder="Confirm Password"
								className="infoInput"
								name="confirmpass"
								onChange={handleChange}
								value={data.confirmpass}
							/>
						)}
					</div>
					<span
						style={{
							display: confirmPass ? "none" : "block",
							color: "red",
							fontSize: "12px",
							alignSelf: "flex-end",
							marginRight: "5px",
						}}
					>
						* Passwords do not match
					</span>
					<div>
						<span
							style={{ fontSize: "12px", cursor: "pointer" }}
							onClick={() => {
								setIsSignUp((prev) => !prev);
								resetForm();
							}}
						>
							{isSignUp
								? "Already have an account? Login!"
								: "Don't have an account? SignUp!"}
						</span>
					</div>
					<button className="button infoButton" type="submit" disabled={loading}>
						{ loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
