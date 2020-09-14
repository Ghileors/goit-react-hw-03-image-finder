import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onImageClick }) {
    return (
        <ul className="ImageGallery">
            {images.map(item => (
                <ImageGalleryItem
                    key={item.id}
                    src={item.webformatURL}
                    srcOriginal={item.largeImageURL}
                    id={item.id}
                    alt={item.tags}
                    getLargeImageURL={onImageClick}
                ></ImageGalleryItem>
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
};
