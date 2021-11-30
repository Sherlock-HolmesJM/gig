import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/button";

const Header = () => {
	return (
		<Wrapper>
			<header>
				<div className="header-title">
					<Link to="/" className="link">
						XYZ Company
					</Link>
				</div>

				<div>
					<ul>
						<li>
							<Link to="/" className="link">
								Home
							</Link>
						</li>
						<li>Services</li>
						<li>Our vision</li>
						<li>Our mission</li>
					</ul>
				</div>

				<div>
					<Button>Get Hired</Button>
				</div>
			</header>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	position: sticky;
	top: 0;
	height: 60px;
	display: flex;
	justify-content: center;
	background-color: ${window.theme.darker};
	/* z-index: 12px; */

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px groove ${window.theme.darker};
		padding: 10px;
		color: white;
		width: 900px;
	}

	.header-title {
		@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

		font-family: "Lobster", cursive;
		font-size: 20px;
		font-weight: 400;
		cursor: context-menu;
	}

	ul {
		display: flex;
		gap: 1rem;
		list-style-type: none;
		font-size: 18px;

		@media (max-width: 750px) {
			display: none;
		}
	}

	li {
		cursor: pointer;
		padding: 5px 12px;
		border-radius: 5px;
		transition: all 0.4s;
	}
	li:hover {
		background-color: ${window.theme.dark};
	}

	.link {
		text-decoration: none;
		color: inherit;
	}
`;
