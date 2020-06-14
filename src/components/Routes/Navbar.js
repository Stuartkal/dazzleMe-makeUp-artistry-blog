import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
	return (
		<div className="nav-main">
			<h1>DazzleMe Makeup Artistry</h1>
			<div className="links">
				<Link to="/" className="link">
					PORTFOLIO
				</Link>
				<Link to="/videos" className="link">
					VIDEOS
				</Link>
				{/* <Link to="/about" className="link">
					ABOUT
				</Link> */}
				<a className="link" href="#about">
					ABOUT
				</a>
				<a className="link" href="http://instagram.com/dazzle_me_makeup" target="blank">
					INSTAGRAM
				</a>
			</div>
		</div>
	);
};

export default Navbar;
