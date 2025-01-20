import React from 'react';

const CreateCard = ({ data, onCardClick }) => {
    return (
        <>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="catalog__card-1"
                    data-category={item.category}
                    onClick={() => onCardClick(item.id)}
                >
                    <div className="catalog__card-1-title">
                        <img src={item.img} alt="img-card" />
                        <h3>{item.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.text }} />
                        <h4>Адрес:</h4>
                        <p dangerouslySetInnerHTML={{ __html: item.adress }} />
                    </div>
                </div>
            ))}
    </>
    );
};

export default CreateCard;