import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import Image from 'material-ui-image';
import client from '../../../ContentfulAPI';
import Footer from '../../Routes/Footer';
import './Portfolio.scss';
const Portfolio = () => {
	const [ images, setImages ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const getPhotos = async () => {
			let Contentful = await client.getEntries({
				content_type: 'dazzleMeGallery'
			});
			setImages(Contentful.items);
			setLoading(false);
		};
		getPhotos();
	}, []);

	// if (loading) {
	// 	<div>
	// 		<h1>Loading....</h1>
	// 	</div>;
	// }

	return (
		<div className="portfolio-main">
			<h3>Portfolio</h3>
			{loading && (
				<div className="loading">
					<h1>Loading images wait....</h1>
				</div>
			)}
			<div className="portfolio">
				{images &&
					images.map((image) => (
						<div className="image" key={image.sys.id}>
							<LazyLoadImage
								onClick={image.fields.photos.fields.file.url}
								className="img"
								effect="blur"
								alt="image"
								src={image.fields.photos.fields.file.url}
							/>
							<div className="caption">
								<h3>{image.fields.description}</h3>
							</div>
						</div>
					))}
			</div>

			{/* <Image
					imageStyle={{ width: 'inherit', height: 'inherit' }}
					src="https://p1.mikolo.com/_x500JBYEB1MFQjgnVfcHeKgJPIqExANaDOL51pdlf5U1.jpeg"
				/>
				<Image
					imageStyle={{ width: 'inherit', height: 'inherit' }}
					src="https://p1.mikolo.com/fCqfzayMZEtkg3X8rikwIlLNRvy8H7vZwxGq0eRI.jpeg"
				/> */}
			<section className="about" id="about">
				<h1>About</h1>
				<div className="separator" />
				<h2>Makeup Artist & Beauty Consultant</h2>
				<h3>Contact</h3>
				<p>Kamu Kamu plaza, Room Ff3,</p>
				<p>0700298214</p>
				<p>Makeup services for weddings, introduction ceremonies, special occasions, photographic makeup.</p>
			</section>
			<Footer />
		</div>
	);
};

export default Portfolio;
