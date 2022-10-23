import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const handleClick = () => {
	console.log("click");
};
export const Side = () => {
	return (
		<div className="side-container">
			<div className="side-content">
				<div className="logo">Logo</div>
				<div className="side-text">
					<h1>Welcome to Uno To Do!</h1>
					<div>
						Start using the best to-do app, you can create and manage your To Do
						lists to improve your organization.
					</div>
				</div>
				<Link to={"/tasks"}>
					<Button type="big" name="Get started" onClick={handleClick} />
				</Link>
			</div>
		</div>
	);
};
