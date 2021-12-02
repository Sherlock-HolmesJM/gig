import { useState, useEffect } from "react";
import styled from "styled-components";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { JobHeaderWrap } from "./common/job";

const ApplicationList = () => {
	const [list, setList] = useState([]);
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		getDocs(collection(getFirestore(), "pms"))
			.then(r => {
				setList(r.docs.map(d => d.data()));
				setMessage(list.length === 0 ? "No data" : "Loaded");
			})
			.catch(e => setMessage("Error: " + e.message));

		// eslint-disable-next-line
	}, []);

	return (
		<Wrapper>
			<JobHeaderWrap>
				<div className="job-header">
					<div className="job-header">
						<div>Interested Applicants</div>
					</div>
				</div>
			</JobHeaderWrap>

			{list.length === 0 && <h2>{message}</h2>}

			<ul>
				{list.map((item, index) => {
					const data: any = {};

					item.form.forEach(item => {
						data[item.name] = item.value;
					});

					return (
						<li key={index}>
							<div className="item user">
								<div className="name">{data.name}</div>
								<em>{data.phone}</em>
								<em>{data.email}</em>
							</div>

							<div className="item role">
								<div>
									<em>{item.job.title}</em>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</Wrapper>
	);
};

export default ApplicationList;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

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

	ul {
		font-size: 18px;
		padding: 0;
		width: min(900px, 100%);
		margin: 20px;

		li {
			display: flex;
			flex-wrap: wrap;
			gap: 50px;
			padding: 10px;
			border: 1px solid ${window.theme.lighter};
			border-radius: 10px;
			cursor: context-menu;
			text-align: left;
			transition: all 0.4s;

			:hover {
				background-color: ${window.theme.lighter};
			}

			& .item :first-child {
				font-weight: bold;
			}

			.item.user em {
				display: block;
				font-weight: 400;
				font-size: 16px;
				color: ${window.theme.dark};
				margin: 0;
			}

			.item.role {
				width: min(100%, 280px);
			}

			@media (max-width: 481px) {
				gap: 3px;

				.item.role {
					order: -1;
				}
			}
		}
	}
`;
