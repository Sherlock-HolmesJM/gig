import styled from "styled-components";

export interface InputProps {
	name: string;
	label: string;
	value?: string;
	error?: string;
	type?: string;
	required?: boolean;
	accept?: string;
	onChange: (e) => void;
}

const Input: React.FC<InputProps> = ({ name, label, error, ...rest }) => {
	return (
		<Wrapper>
			<label htmlFor={name} className={rest.required ? "required" : ""}>
				{label}
			</label>
			<input {...rest} id={name} name={name} />
			{error && <div className="input-error">{error}</div>}
		</Wrapper>
	);
};

export default Input;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 5px;
	gap: 1vw;

	label {
		flex-grow: 0;
		margin-left: 5px;

		&.required::after {
			content: "*";
			color: red;
			padding-left: 5px;
			font-weight: bold;
		}
	}

	input {
		font-size: 16px;
		padding: 6px;
		outline: none;
		border-radius: 5px;
		border: 1px solid #bbb9b9;
		flex: 60%;
		flex-grow: 0;
	}

	.input-error {
		background-color: #f10e0eb5;
		color: white;
		padding: 5px;
		border-radius: 5px;
		font-size: 14px;
	}
`;
