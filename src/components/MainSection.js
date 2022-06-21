import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <main>
        <div className='main-container'>
            <video src='/video/main-video.mp4' autoPlay loop muted />
            <h1>Nəyi gözləyirsən?</h1>
            <p>Gəl birlikdə oyun dünyasını kəşf edək</p>
            <div className="main-btns">
                <Button className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Başla
                </Button>

                <Button className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Videonu izlə <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    </main>
  )
}

export default MainSection