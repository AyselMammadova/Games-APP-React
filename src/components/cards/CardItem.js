import React, { useState, useEffect } from 'react';


function CardItem(props) {
  
  const [fav, setFav] = useState(props.fav);

  const addFav= () => {
    setFav(prevFav => !prevFav);
  }

    useEffect(() => {

     setFav(JSON.parse(window.localStorage.getItem(props.id)));

    }, [props.id]);
  
    useEffect(() => {
      window.localStorage.setItem(props.id, fav);
    }, [fav, props.id])
  
  

  return (
    <>
        <div className='cards__item__wrap col-xl-3 col-lg-4 col-sm-6' onClick={() => addFav()}>
          <div className="cards__item">
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
                <div className={`addFav ${fav ? 'active' : ''}`} >
                  {fav ? 'Sevimli oyun' : 'Sevimli oyunun et'}
                  <i className={`ms-2 fa-heart ${fav ? 'fas' : 'far'}`} />
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardItem