import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context";
import hero from "../assets/hero.svg";
import designer from "../assets/designer.svg";
import designer_f from "../assets/designer_f.svg";
import Button from "./common/button";
import HeroSection from "./common/heroSection";
import Input from "./common/input";

const LandingPage = () => {
	const { login, setLogin } = useContext(Context);
	const history = useHistory();

	const [form, setForm] = useState([
		{ value: "", type: "email", label: "Email", required: true, name: "email" },
		{
			value: "",
			type: "password",
			label: "Password",
			required: true,
			name: "pw"
		}
	]);

	const handleChange = (value, index) => {
		const data = [...form];
		data[index].value = value;
		setForm(data);
	};

	const handleLogin = e => {
		e.preventDefault();

		history.push("/list");
		setLogin(false);
	};

	return (
		<Wrapper>
			{login && (
				<div className="login-form">
					<form onSubmit={handleLogin}>
						<h2>Login Form</h2>

						{form.map((data, index) => (
							<Input
								key={index}
								{...data}
								onChange={e => handleChange(e.target.value, index)}
							/>
						))}
						<div>
							<Button type="submit">Login</Button>
							<Button onClick={() => setLogin(false)}>Cancel</Button>
						</div>
					</form>
				</div>
			)}

			<HeroSection img={hero}>
				<div>award winning design</div>
				<div>
					We make your business look <span>great</span>
				</div>
				<Button style={{ cursor: "none" }}>Quote</Button>
			</HeroSection>

			<div className="page-bottom">
				<div className="page-bottom-left">
					<img src={designer} alt="male" />
					<img src={designer_f} alt="female" />
				</div>

				<div className="page-bottom-circle">
					<div className="page-bottom-circle inner"></div>
				</div>

				<div className="page-bottom-right">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
					modi fugit voluptatibus suscipit consectetur architecto corrupti, odit
					sint nihil commodi, ullam fuga beatae voluptatum distinctio qui dolore
					consequatur culpa maxime perferendis dolor quisquam id facere sunt.
					Commodi qui rem perferendis deleniti explicabo est ipsum! Aliquam
					ullam similique repellat totam?
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.login-form {
		position: fixed;
		display: flex;
		background-color: ${window.theme.lightest};
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 6;

		& > * {
			position: absolute;
			top: 80px;
		}
	}

	.page-bottom {
		background-color: ${window.theme.lighter};
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		.page-bottom-circle {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: ${window.theme.lighter};

			.inner {
				width: 45px;
				height: 45px;
				background-color: ${window.theme.dark};
				transition: background 0.5s;

				:hover {
					background-color: ${window.theme.darker};
				}
			}

			@media (max-width: 1093px) {
				display: none;
			}
		}

		.page-bottom-left {
			flex-grow: 1;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			img {
				width: 200px;
				height: 200px;
				margin: 10px;
			}
		}

		.page-bottom-right {
			flex-basis: 50%;
			padding: min(60px, 10vw);
			color: white;
			text-align: justify;
			font-size: 17px;
			line-height: 25px;
			background-color: ${window.theme.dark};
		}

		@media (max-width: 920px) {
			.page-bottom-right {
				flex-grow: 1;
			}
		}
	}
`;

export default LandingPage;
