import { Switch, Route } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/register" component={RegisterForm} />
				<Route path="/" component={LoginForm} />
			</Switch>
		</div>
	);
}

export default App;
