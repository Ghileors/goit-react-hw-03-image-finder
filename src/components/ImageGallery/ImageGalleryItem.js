import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
    src,
    srcOriginal,
    id,
    alt,
    getLargeImageURL,
}) {
    const handleClick = event => getLargeImageURL(event.target.dataset.source);

    return (
        <li className="ImageGalleryItem">
            <img
                src={src}
                alt={alt}
                data-source={srcOriginal}
                data-id={id}
                className="ImageGalleryItem-image"
                onClick={handleClick}
            />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    srcOriginal: PropTypes.string.isRequired,
    id: PropTypes.number,
    alt: PropTypes.string,
    getLargeImageURL: PropTypes.func.isRequired,
};
