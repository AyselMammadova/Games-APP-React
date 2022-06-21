import React from 'react'
import CardItem from './CardItem';
import image from '../img/1.jpg';
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Text</h1>
        <div className="cards__container">
            <div className="cards_wrapper">
                <div className="cards__items">
                <CardItem
                    src={image}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards