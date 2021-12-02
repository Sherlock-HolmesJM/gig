import { useState } from "react";
import { Redirect, useParams } from "react-router";
import styled from "styled-components";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import jobs from "../util/job";
import Button from "./common/button";
import Input from "./common/input";
import { JobHeaderWrap } from "./common/job";

const AppForm = () => {
	const [form, setForm] = useState([
		{ name: "name", value: "", label: "Full Name", required: true },
		{
			name: "phone",
			value: "",
			label: "Phone",
			type: "number",
			required: true
		},
		{ name: "email", value: "", label: "Email", type: "email", required: true },
		{ name: "curentCompany", value: "", label: "Current Company" }
	]);

	const [resume, setResume] = useState<any>("");

	const { id } = useParams<{ id: string }>();

	const job = jobs().find(j => j.id === id);

	if (!job) return <Redirect to="/jobs" />;

	const handleFile = e => {
		const reader = new FileReader();

		reader.onload = e => {
			setResume(e.target.result);
		};

		reader.readAsDataURL(e.target.files[0]);
	};

	const handleChange = (value, index) => {
		const data = [...form];
		data[index].value = value;

		setForm(data);
	};

	const handleSubmit = e => {
		e.preventDefault();

		const data = {
			form,
			resume,
			jobId: id
		};

		addDoc(collection(getFirestore(), "pms"), data)
			.then(d => {
				alert("Application submitted");
			})
			.catch(e => alert("Error: " + e.message));
	};

	return (
		<Wrapper>
			<JobHeaderWrap>
				<div className="job-header">
					<div>{job.title}</div>

					<div>
						<span>{job.location}</span>
						<span>{job.type}</span>
						<span>{job.pay}</span>
					</div>
				</div>
			</JobHeaderWrap>

			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<h2>SUBMIT YOUR APPLICATION</h2>

					<Input
						type="file"
						label="Resume/CV"
						name="resume"
						onChange={handleFile}
						accept="application/msword, application/pdf"
					/>

					{form.map((data, index) => (
						<Input
							key={index}
							{...data}
							onChange={e => handleChange(e.target.value, index)}
						/>
					))}

					<Submit>SUBMIT APPLICATION</Submit>
				</form>
			</div>
		</Wrapper>
	);
};

export default AppForm;

const Submit = styled(Button)`
	font-size: 20px;
	width: max-content;
	margin: 20px auto;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	padding-bottom: 30px;

	.job-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		min-height: 200px;
		text-align: left;
		width: min(900px, 100%);

		& > :nth-child(1) {
			font-size: min(50px, 15vw);
			font-weight: 500;
		}

		& > :last-child {
			display: flex;
			flex-wrap: wrap;
			width: 80%;
			gap: 12px;

			@media (max-width: 324px) {
				flex-direction: column;
			}
		}
	}

	.form-container {
		width: min(800px, 100%);
		text-align: left;

		form {
			display: flex;
			flex-direction: column;

			h2 {
				margin-left: 8px;
			}
		}
	}
`;
