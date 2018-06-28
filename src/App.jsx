import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CardList from "./containers/cardlist/CardList";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<CardList />
			</div>
		);
	}
}

export default App;
