import styled from "styled-components";

export interface InputProps {
	name: string;
	label: string;
	value: string;
	error?: string;
	type?: string;
	onChange: (e) => void;
}

const Input: React.FC<InputProps> = ({ name, label, error, ...rest }) => {
	return (
		<Wrapper>
			<label htmlFor={name}>{label}</label>
			<input {...rest} id={name} name={name} />
			{error && <div className="input-error">{error}</div>}
		</Wrapper>
	);
};

export default Input;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 5px;
	gap: 5px;

	input {
		font-size: 16px;
		padding: 6px;
		outline: none;
		width: 99%;
	}

	.input-error {
		background-color: #f10e0eb5;
		color: white;
		padding: 5px;
		border-radius: 5px;
		font-size: 14px;
	}
`;
