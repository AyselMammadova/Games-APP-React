import React, { Component } from 'react'

class Error extends Component {


  render() {
    
    const Styles = {
        color: '#01b36b', 
        padding: '50px 0', 
        fontSize: '32px', 
        backgroundColor: '#e4dede'
    }

    return (
        <p className='text-center' style={Styles}>Oyun tapılmadı 
            <i className="far fa-frown ms-2"></i>
        </p>
    )
  }
}

export default Error