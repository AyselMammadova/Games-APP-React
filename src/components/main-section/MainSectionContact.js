import React from 'react';
import './MainSection.css';
import contactImg from '../../img/contact.jpg';

function MainSectionContact() {
  return (
    <main className="main-sec-pages">
        <div className="main-container" style={{backgroundImage: "url(" + contactImg + ")", filter: "hue-rotate(310deg)"}}>
            <h1>Proqramçı ilə əlaqə</h1>
            <strong>Aysel Mammadova</strong>
        </div>
    </main>
  )
}

export default MainSectionContact