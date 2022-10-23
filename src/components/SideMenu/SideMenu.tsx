import React, { useState } from "react";
import { UserUI } from "./UserUI";
import user from "../../json/user.json";
import { SearchIcon } from "../../icons/SearchIcon";
import { Bar } from "./Bar";
import custombars from "../../json/custombars.json";
import paths from "../../json/iconspaths.json";

export const SideMenu = () => {
	const [focused, setFocused] = useState(false);
	return (
		<div>
			<UserUI user={user} />
			<div className="search-icon">
				<SearchIcon color={focused ? "#5946d2" : "gray"} />
				<label>
					<input
						type="text"
						placeholder={`Search`}
						onFocus={() => {
							setFocused(true);
						}}
						onBlur={() => {
							setFocused(false);
						}}
					></input>
				</label>
			</div>
			<div className="classes">
				<Bar path={paths.star} name="Important" />
				<Bar path={paths.house} name="Tasks" />
				<div>BRAKE</div>
				<div className="custom-task-container">
					{custombars.map((custombar) => {
						return <Bar path={paths.list} name={`${custombar.name}`} />;
					})}
				</div>
			</div>
		</div>
	);
};
