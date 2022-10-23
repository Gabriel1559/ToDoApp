import React, { FC } from "react";
import { Icon } from "../../icons/Icon";
import { IBar } from "../../Interfaces/IBar";

export const Bar: FC<IBar> = ({ path, name }) => {
	return (
		<div className="bar-container">
			<div className="name-icon">
				<Icon
					path={path.path}
					fill={path.fill}
					width={path.width}
					height={path.height}
				/>
				<div>{name}</div>
			</div>
			<div>{">"}</div>
		</div>
	);
};
