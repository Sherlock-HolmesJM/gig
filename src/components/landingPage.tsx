import styled from "styled-components";
import hero from "../assets/hero.svg";
import designer from "../assets/designer.svg";
import designer_f from "../assets/designer_f.svg";
import Button from "./common/button";

const LandingPage = () => {
	return (
		<Wrapper>
			<div className="page-center">
				<div className="page-text">
					<div>award winning design</div>
					<div>
						We make your business look <span>great</span>
					</div>
					<Button>Quote</Button>
				</div>

				<div className="page-image">
					<img src={hero} alt="hero" />
				</div>
			</div>

			<div className="page-bottom">
				<div className="page-bottom-left">
					<img src={designer} alt="male" />
					<img src={designer_f} alt="female" />
				</div>

				<div className="page-bottom-circle">
					<div className="page-bottom-circle inner"></div>
				</div>

				<div className="page-bottom-right">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
					modi fugit voluptatibus suscipit consectetur architecto corrupti, odit
					sint nihil commodi, ullam fuga beatae voluptatum distinctio qui dolore
					consequatur culpa maxime perferendis dolor quisquam id facere sunt.
					Commodi qui rem perferendis deleniti explicabo est ipsum! Aliquam
					ullam similique repellat totam?
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.page-center {
		display: flex;
		justify-content: space-between;
		margin: 120px 0;
		width: 900px;
	}

	.page-text {
		font-size: 46px;
		text-align: left;
		font-weight: 700;
		max-width: 350px;

		& > :first-child {
			color: #1d1313;
			font-weight: 400;
			font-size: 18px;
			text-transform: uppercase;
		}
	}

	.page-bottom {
		position: relative;
		background-color: ${window.theme.lighter};
		display: flex;
		justify-content: center;
		align-items: center;

		.page-bottom-circle {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: ${window.theme.dark};

			.inner {
				width: 45px;
				height: 45px;
				background-color: ${window.theme.lighter};
				transition: background 0.5s;

				:hover {
					background-color: ${window.theme.lightest};
				}
			}
		}

		.page-bottom-left {
			flex-grow: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 50px;

			img {
				width: 200px;
				height: 200px;
			}
		}

		.page-bottom-right {
			flex-basis: 50%;
			padding: 60px;
			color: white;
			text-align: justify;
			font-size: 17px;
			line-height: 25px;
			background-color: ${window.theme.dark};
		}
	}
`;

export default LandingPage;
