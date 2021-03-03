import './ImageList.css';
import React from 'react';

const ImgeList = props => {
	const images = props.images.map(image => {
		return <ImageCard key={image.id} image={image} />
	});

	return <div className="image-list">{images}</div>
}
export default ImageList;