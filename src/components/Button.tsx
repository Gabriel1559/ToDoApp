import React, { FC } from "react";
import { IButton } from "../Interfaces/IButton";

export const Button: FC<IButton> = ({ name, onClick, type }) => {
	return (
		<button className={`${type} button`} onClick={onClick}>
			{name}
		</button>
	);
};
