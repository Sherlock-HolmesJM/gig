import { Link, withRouter } from "react-router-dom";
import { useLocation } from "react-router";
import { useContext } from "react";
import { Context } from "../context";
import styled from "styled-components";
import Button from "./common/button";

const Header = () => {
	const { setLogin } = useContext(Context);

	const isLandingPage = useLocation().pathname.endsWith("/");

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

				{isLandingPage && (
					<div className="btn-group">
						<Button>
							<Link to="/jobs" className="link">
								Job Offers
							</Link>
						</Button>

						<Button onClick={() => setLogin(true)}>Login</Button>
					</div>
				)}
			</header>
		</Wrapper>
	);
};

export default withRouter(Header);

const Wrapper = styled.div`
	position: sticky;
	top: 0;
	height: 60px;
	display: flex;
	justify-content: center;
	background-color: ${window.theme.darker};
	z-index: 12px;

	.btn-group {
		@media (max-width: 350px) {
			& > * {
				font-size: 14px;
				padding: 5px;
				margin: 3px;
			}
		}
	}

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
`;
