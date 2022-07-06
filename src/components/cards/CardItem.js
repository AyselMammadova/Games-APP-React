import React, { useState } from 'react';

function CardItem(props) {

  const [fav, setFav] = useState(props.fav);

  const AddFav = () => {
    setFav(!fav)
  }


  return (
    <>
        <div className='cards__item__wrap col-lg-4 col-md-6' onClick={AddFav}>
          <div className="cards__item">
            <figure className='cards__item__pic-wrap mb-0' data-category={props.label}>
                <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
                />
                <span className='date'>{props.date}</span>
                <span className={`addFav ${fav ? 'active' : ''}`} >
                  {fav ? 'Sevimli oyun' : 'Sevimli oyunun et'}
                  <i className={`ms-2 fa-heart ${fav ? 'fas' : 'far'}`} />
                </span>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
                <p className='cards__desc text-dark mb-0'>{props.desc}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardItem