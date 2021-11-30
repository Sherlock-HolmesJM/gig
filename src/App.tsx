import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import LandingPage from "./components/landingPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" component={LandingPage} />
			</Switch>
		</div>
	);
}

export default App;
