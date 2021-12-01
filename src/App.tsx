import { Switch, Route } from "react-router-dom";
import "./App.css";
import Job from "./components/common/job";
import Header from "./components/header";
import Jobs from "./components/jobs";
import LandingPage from "./components/landingPage";

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route path="/job/:id" component={Job} />
				<Route path="/jobs" component={Jobs} />
				<Route path="/" component={LandingPage} />
			</Switch>
		</div>
	);
}

export default App;
