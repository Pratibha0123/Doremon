import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryGrid = ({ images, onImageClick }) => {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mx-auto">
            {images.map((img) => (
                <GalleryItem key={img.id} image={img} onClick={onImageClick} />
            ))}
        </div>
    );
};

export default GalleryGrid;
