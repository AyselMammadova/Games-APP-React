import React from 'react';
import '../../App.css';
import './MainSection.css';
import video from '../../video/main-video.mp4';

function MainSection() {
  return (
    <main>
        <div className='main-container'>
            <video src={video} autoPlay loop muted />
            <h1>Nə gözləyirsən?</h1>
            <p>Gəl birlikdə oyun dünyasını kəşf edək</p>
            <div className="main-btns">
                <a href='https://www.youtube.com/watch?v=-mUCexBLUWs' target='_blank' rel='noreferrer' className='btn-mobile'>
                    <button 
                    className='btns btn--primary btn--large'>
                        Videonu izlə <i className='far fa-play-circle' />
                    </button>
                </a>
            </div>
        </div>
    </main>
  )
}

export default MainSection