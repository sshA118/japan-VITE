import React from 'react';

const Modal = ({ isOpen, currentImage, images, onClose, onPrev, onNext }) => {
    if (!isOpen) return null;

    return (
        <div className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <img src={currentImage} className="open__big" alt="Полноэкранное фото" />
            <div className="prev" onClick={onPrev}>
                &#10094;
            </div>
            <div className="next" onClick={onNext}>
                &#10095;
            </div>
        </div>
    );
};

export default Modal;