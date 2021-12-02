import styled from "styled-components";
import HeroSection from "./common/heroSection";
import job_offer from "../assets/job_offer.svg";
import jobs from "../util/job";
import { Link } from "react-router-dom";

const Jobs = () => {
	return (
		<Wrapper>
			<HeroSection img={job_offer}>
				<div>We are hiring</div>
				<div>Let's build XYZ together</div>
			</HeroSection>

			<div className="jobs-openings">
				<h1>Openings</h1>

				<div>
					We don't just offer great compensation and flexibility, but the
					perfect mission, team and timing for you to build something that
					changes everything.
				</div>

				<div>
					{jobs().map(job => (
						<Link key={job.id} to={`/job/${job.id}`} className="link jobs-job">
							<div>{job.title}</div>

							<div>
								<span>{job.location}</span>
								<span>{job.type}</span>
								<span>{job.pay}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Wrapper>
	);
};

export default Jobs;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	.jobs-openings {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		width: min(900px, 100%);

		& > :nth-child(2) {
			font-size: 23px;
			text-align: center;
			padding: 10px;
		}

		& > :nth-child(3) {
			display: flex;
			flex-direction: column;
			background-color: ${window.theme.lighter};
			border-radius: 10px;
			width: 100%;
			margin-bottom: 30px;

			.jobs-job {
				cursor: pointer;
				padding: 20px 10px;
				transition: all 0.8s ease-in-out;

				&:hover {
					background-color: ${window.theme.light};
				}

				&:first-child {
					border-radius: 10px 10px 0 0;
				}
				&:last-child {
					border-radius: 0 0 10px 10px;
				}

				& > :first-child {
					color: ${window.theme.darker};
					font-size: 25px;
					font-weight: 500;
					margin-bottom: 10px;
				}

				& > :last-child {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 10px;
					font-size: 18px;
				}
			}
		}
	}
`;
