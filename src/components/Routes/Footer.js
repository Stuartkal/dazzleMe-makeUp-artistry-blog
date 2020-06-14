import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import './Navbar.scss';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-main">
				<a
					href="https://m.facebook.com/DaZzle-Me-Makeup-Artistry-1055231361169493/?refid=46&_xts_%5B0%5D=12.AbrYNt_ZZbzTqVdmlC3jJp2ZP6La5uClOgskHNV3pZoazbKW5TatQUdBZ9czdg8DkSTJjAgF29vjABzN6L8wkYcgMVt4LWA4FvBm5Njvg0FlJ9TrNm-U_7hD6Ea7nWBd2X55UMcu9l5-BzES32sVDXT6rQGkrP4QwEPTAxw4N4hzIJMJsg9FUFy-XWaw2zBU9knXCXK4hXK28qw3DPfhhOMJIGWgffjI7fWSPinlU3vjqDSJf09XVecK5Owj7cHw_55kPtJvngsu9kqlBzWlnALOJ_3V5zXcgGdxiLRNejHOSywfpHsnSQCm5FNXGLCskXnfQmup_hMOnaApT3P8_6mRL_g5-oQqR4tRNcpSz1loIBwmBf6FtVqMu_5tK5dzLopHQiue3LRgtvcTRSPzSTKqNKnliGOq1GWlS5QGF90Z-iM56vKQkOXW6ARXKpLBFXrtj5vZp216KM0ZzPsE5MGWjXifKXCTsi3wIhAOBnlpZ6pMGnkQLg1_WsCfaHUr6om83ef0xrLLzFxen0wC8GGY_fuJfkPjxMzna6PMRF6D--Noxn9ukNjDmbtYxSAj5qW1JVFpWNKrMBzRVpwxLTP_DlQeXZUaXGxz90MFnFQNmXhMf2Z5a9StzxuQYqmm6kQ-tHN_Gqq963xhfY_624L-g3BiE6m19SkMrPFzjZ6OMA&_tn_=C"
					target="blank"
				>
					<FacebookIcon />
				</a>
				<a href="https://www.instagram.com/dazzle_me_makeup/" target="blank">
					<InstagramIcon />
				</a>
			</div>
			<p>Copyright&#xa9; &middot; DazzleMe MakeUp Artistry, 2020 &middot; All rights reserved</p>
		</div>
	);
};

export default Footer;
