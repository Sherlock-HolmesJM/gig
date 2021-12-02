import styled from "styled-components";
import { Redirect, useParams } from "react-router";
import jobs from "../../util/job";
import Button from "./button";
import { Link } from "react-router-dom";

const Job = () => {
	const { id } = useParams<{ id: string }>();

	const job = jobs().find(job => job.id === id);

	if (!job) return <Redirect to="/jobs" />;

	const listing = [
		{ title: "Benefits", list: job.benefits },
		{ title: "Requirements", list: job.requirements },
		{ title: "Responsibilities", list: job.responsibilities }
	];

	return (
		<Wrapper>
			<JobHeaderWrap>
				<div className="job-header">
					<div>Opening</div>

					<div>{job.title}</div>

					<div>
						<span>{job.location}</span>
						<span>{job.type}</span>
						<span>{job.pay}</span>
					</div>
				</div>
			</JobHeaderWrap>

			<div className="listing-group">
				{listing.map(item => (
					<div className="listing" key={item.title}>
						<div>{item.title}</div>

						<ul>
							{item.list.map(b => (
								<li key={b}>{b}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<Button className="apply-btn">
				<Link to={`/application/${id}`} className="link">
					Apply for this job
				</Link>
			</Button>
		</Wrapper>
	);
};

export default Job;

export const JobHeaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;

	background: ${window.theme.light};
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	padding-bottom: 30px;
	font-family: cursive;

	.job-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		min-height: 250px;
		text-align: left;
		width: min(900px, 100%);

		& > :nth-child(2) {
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

	.listing-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 40px;
	}

	.listing {
		display: flex;
		justify-content: space-between;
		width: min(900px, 100%);
		padding: 0 10px;
		text-align: left;

		& > :first-child {
			flex: 20%;
		}

		ul {
			margin: 0;
			flex: 80%;
		}

		@media (max-width: 521px) {
			flex-direction: column;
			gap: 20px;
		}
	}

	.apply-btn {
		padding: 15px;
		font-size: clamp(15px, 8vw, 18px);
		font-weight: 500;
	}
`;
