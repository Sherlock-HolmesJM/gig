import styled from "styled-components";

const Button = styled.button<{ disabled?: boolean }>`
	color: white;
	background-color: ${props => (props.disabled ? "gray" : window.theme.dark)};
	padding: 10px 15px;
	margin: 5px;
	border: none;
	outline: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		box-shadow: -1px 1px 1px #e6e6e6;
	}
`;

export default Button;
