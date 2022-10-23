import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import "./styles/general.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/tasks" element={<Tasks />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
