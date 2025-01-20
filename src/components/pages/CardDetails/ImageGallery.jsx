import React from 'react';

const ImageGallery = ({ images, onThumbnailClick }) => {
    return (
        <>
                <div className="openImg">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Фото ${index + 1}`}
                            className={`bigImage block__img${index + 1}`}
                        />
                    ))}
                </div>
            <div className="gallery">

            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Фото ${index + 1}`}
                        className={`thumbnail block__img__${index + 1}`}
                        onClick={() => onThumbnailClick(image)}
                    />
                ))}
            </div>
            </div>

        </>
    );
};

export default ImageGallery;