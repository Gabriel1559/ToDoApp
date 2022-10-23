import React, { FC } from "react";
import { ITask } from "../Interfaces/ITask";

export const Task: FC<ITask> = ({ name, date }) => {
	return (
		<div>
			<div className="task-name">
				<div>{name}</div>
				{date ? <div className="date n">{date}</div> : <></>}
			</div>
		</div>
	);
};
