import React from 'react';


function CardItem(props) {
  // const AddFav = () => {
  //   !(props.fav)
  // }

  // const [newFav, setNewFav] = useState(props.fav);

  // useEffect(() => {
  //   const favPosition = window.localStorage.getItem('fav');
  //   console.log(favPosition);
  //   if(favPosition !== null) {
  //     setNewFav(JSON.parse(favPosition))
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('fav', JSON.stringify(fav));
  // }, [fav])

  return (
    <>
        <div className='cards__item__wrap col-xl-3 col-lg-4 col-sm-6' onClick={props.AddFav}>
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
                <div className={`addFav ${props.fav ? 'active' : ''}`} >
                  {props.fav ? 'Sevimli oyun' : 'Sevimli oyunun et'}
                  <i className={`ms-2 fa-heart ${props.fav ? 'fas' : 'far'}`} />
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardItem