import Joi from "joi";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Form from "./common/form";
import Button from "./common/button";

class LoginForm extends Form {
	state = {
		data: { email: "", password: "" },
		errors: { email: "" }
	};

	schema = {
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().min(5).required().label("Password")
	};

	register = e => {
		e.preventDefault();
		e.stopPropagation();

		this.props.history.replace("/register");
	};

	logout = e => {
		e.preventDefault();
		e.stopPropagation();

		signOut(getAuth());

		alert("Goodbye");
	};

	async doSubmit() {
		console.log("...");
		try {
			const { email, password } = this.state.data;
			const { user } = await signInWithEmailAndPassword(
				getAuth(),
				email,
				password
			);

			const db = getFirestore();
			const data = await getDoc(doc(db, "form", user.uid));
			const { name } = data.data();

			console.log({ name, email, password });

			alert(`Welcome back ${name}`);
		} catch (error) {
			alert("An error occured. Please try again later.");
			console.log(error.message);
		}
	}

	render() {
		return (
			<Wrapper>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Email", "email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Login")}
					<Button onClick={this.logout}>Logout</Button>
					<Button onClick={this.register}>Register</Button>
				</form>
			</Wrapper>
		);
	}
}

export default LoginForm;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #dfc594;
	padding: 10px;
	margin: auto;
	min-height: 100vh;

	form {
		width: 500px;
		padding: 0;
	}
`;
