import Joi from "joi";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Form from "./common/form";
import Button from "./common/button";

class RegisterForm extends Form {
	state = {
		data: { email: "", name: "", password: "" },
		errors: { email: "", name: "", password: "" }
	};

	schema = {
		email: Joi.string().email().required().label("Email"),
		name: Joi.string().required().min(4).label("Name"),
		password: Joi.string().min(5).required().label("Password")
	};

	login = e => {
		e.preventDefault();
		e.stopPropagation();

		this.props.history.replace("/");
	};

	async doSubmit() {
		try {
			const { email, password, name } = this.state.data;
			const { user } = await createUserWithEmailAndPassword(
				getAuth(),
				email,
				password
			);

			const db = getFirestore();

			await setDoc(doc(db, "form", user.uid), {
				name,
				email
			});

			console.log({ name, email, password });
			alert("Registered successfully.");

			this.props.history.replace("/");
		} catch (error) {
			alert(error.message);
			console.log(error.message);
		}
	}

	render() {
		return (
			<Wrapper>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("name", "Full Name")}
					{this.renderInput("email", "Email", "email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Register")}
					<Button onClick={this.login}>Login</Button>
				</form>
			</Wrapper>
		);
	}
}

export default RegisterForm;

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
		min-width: 300px;
		padding: 0;
	}
`;
