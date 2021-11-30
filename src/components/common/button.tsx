import styled from "styled-components";

const Button = styled.button<{ disabled?: boolean }>`
	color: white;
	background-color: ${props => (props.disabled ? "gray" : "#2e74c4")};
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
