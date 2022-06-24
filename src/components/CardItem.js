import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
        <div className='cards__item col-lg-4 col-md-6'>
            <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap mb-0' data-category={props.label}>
                <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
                />
                <span className='date'>{props.date}</span>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
                <p className='cards__desc text-dark mb-0'>{props.desc}</p>
            </div>
            </Link>
        </div>
    </>
  )
}

export default CardItem