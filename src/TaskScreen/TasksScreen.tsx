import React, { useState } from "react";
import { Icon } from "../icons/Icon";
import paths from "../json/iconspaths.json";
import { Task } from "./Task";

export const TasksScreen = () => {
	const [active, setActive] = useState(true);
	return (
		<div className="tasksScreen">
			<div className="header">
				<h1>Task List</h1>
				<div>
					{/* when clicked on icon send event */}
					<Icon
						path={paths.edit.path}
						fill={paths.edit.fill}
						width={paths.edit.width}
						height={paths.edit.height}
					/>
					<Icon
						path={paths.delete.path}
						fill={paths.delete.fill}
						width={paths.delete.width}
						height={paths.delete.height}
					/>
				</div>
			</div>
			<div className="categories">
				<div
					className={`category ${active ? "active" : ""}`}
					onClick={() => {
						setActive(true);
					}}
				>
					to do
				</div>
				<div
					className={`category ${!active ? "active" : ""}`}
					onClick={() => {
						setActive(false);
					}}
				>
					completed
				</div>
			</div>
			<Task name="da" />
		</div>
	);
};
