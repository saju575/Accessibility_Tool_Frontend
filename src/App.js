import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

function App() {
	return (
		<div>
			
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/result" element={<Result/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
