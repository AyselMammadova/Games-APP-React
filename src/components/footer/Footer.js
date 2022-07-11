import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="custom-container">
                    <div className="footer-row flex-column flex-md-row">
                        <p className="mb-0">Copyright &copy; {new Date().getFullYear()}. Bütün hüquqlar qorunur</p>
                        <p className="mb-0">Created By 
                            <a href="https://www.linkedin.com/in/ayselmammadova/" target="_blank" rel="noreferrer" className="ms-2">
                                <em>Aysel Mammadova</em>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
