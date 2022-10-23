import React, { FC } from "react";
import { IUser } from "../../Interfaces/IUser";

export const UserUI: FC<IUser> = ({ user }) => {
	return (
		<div className="user-container">
			<img className="round-image" src={user.image} />
			<div className="email-name">
				<div>{user.name}</div>
				<div>{user.email}</div>
			</div>
		</div>
	);
};
