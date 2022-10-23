import React from "react";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { TasksScreen } from "../TaskScreen/TasksScreen";

export const Tasks = () => {
	return (
		<div className="home-page-template">
			<SideMenu />
			<TasksScreen />
		</div>
	);
};
