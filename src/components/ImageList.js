import React from 'react';

const ImageList = (props) => {
	props.images.map(({ description, id, urls}) => {
		return <img key={id} src={urls.regular} alt={ description}/>
	})

	return <div>{ props.images }</div>
}

export default ImageList;