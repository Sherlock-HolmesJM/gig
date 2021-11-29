import styled from "styled-components";

const Button = styled.button`
	color: white;
	background-color: #2e74c4;
	padding: 10px;
	margin: 5px;
	border: none;
	outline: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.4s;

	&:hover {
		box-shadow: 2px 2px 5px #e6e6e6;
	}
`;

export default Button;
