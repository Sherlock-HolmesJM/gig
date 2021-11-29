import Joi from "joi";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./common/form";

class RegisterForm extends Form {
	state = {
		data: { email: "", name: "", password: "" },
		errors: { email: "" }
	};

	schema = {
		email: Joi.string().email().required().label("Email"),
		name: Joi.string().required().label("Name"),
		password: Joi.string().min(5).required().label("Password")
	};

	async doSubmit() {
		try {
			const { email, password, name } = this.state.data;
			await createUserWithEmailAndPassword(getAuth(), email, password);

			console.log({ name, email, password });
		} catch (error) {
			alert("An error occured. Please try again later.");
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
		width: 500px;
		padding: 0;
	}
`;
