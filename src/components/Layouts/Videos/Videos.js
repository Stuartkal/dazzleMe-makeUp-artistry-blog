import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import client from '../../../ContentfulAPI';
import Footer from '../../Routes/Footer';

import './Video.scss';
const Videos = () => {
	const [ videos, setVideos ] = useState(null);

	useEffect(() => {
		const getPhotos = async () => {
			let Contentful = await client.getEntries({
				content_type: 'dazzleMeVideos'
			});
			setVideos(Contentful.items);
		};
		getPhotos();
	}, []);

	// console.log('image urls', videos);

	return (
		<div>
			<div className="video-main">
				<h3>Videos</h3>
				<div className="video">
					<ReactPlayer className="vid" url="https://www.youtube.com/watch?v=lEQ5Fe9IorU" />
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Videos;
