import styled from "styled-components";

interface Props {
	img?: string;
}

const HeroSection: React.FC<Props> = props => {
	const { img, children } = props;

	return (
		<Wrapper>
			<div className="page-text">{children}</div>

			{img && (
				<div className="page-image">
					<img src={img} alt="hero" />
				</div>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 120px 0;
	width: min(900px, 98%);

	.page-text {
		font-size: min(10vw, 46px);
		text-align: left;
		font-weight: 700;
		max-width: 350px;
		padding: 20px;

		& > :first-child {
			color: #1d1313;
			font-weight: 400;
			font-size: 18px;
			text-transform: uppercase;
		}
	}

	.page-image {
		width: min(400px, 90%);

		img {
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: 770px) {
		justify-content: center;
		gap: 40px;
		margin: 100px 0;
	}
`;

export default HeroSection;
