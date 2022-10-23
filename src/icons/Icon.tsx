import React, { FC } from "react";

interface IIcon {
	path: string;
	fill: string;
	width: string;
	height: string;
}

export const Icon: FC<IIcon> = ({ path, fill, width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d={path} fill={fill} />
		</svg>
	);
};
