import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import CourseList from "./corousel/Corousel"

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<CourseList />
			</div>
		);
	}
}

export default App;
