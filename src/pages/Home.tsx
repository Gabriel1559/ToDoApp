import { Canvas } from "../canvas/Canvas";
import { Side } from "../components/Side";

export const Home = () => {
	return (
		<div className="home-page-template">
			<Side />
			<Canvas />
		</div>
	);
};
