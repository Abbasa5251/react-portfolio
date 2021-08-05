import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header id="header">
			<nav className="navbar fixed-top navbar-expand-md">
				<div className="container">
					<Link id="logo" className="navbar-brand" to="/">
						ADev
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon">
							<img
								src="images/menu_bars.svg"
								height="25px"
								width="25px"
								alt="Menu"
							/>
						</span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About Me
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/skills">
									Skills
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/services">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact Me
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
