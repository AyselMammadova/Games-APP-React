import React, { Component } from 'react';
import '../../App.css';
import ContactForm from '../contact-form/ContactForm';
import MainSectionContact from '../main-section/MainSectionContact';

class Contact extends Component {
    render() {

        return (
            <>
                <MainSectionContact />
                <div className="p-5">
                    <div className="custom-container">
                        <h1>Əlaqə formu</h1>
                        <div className="row justify-content-center w-100">
                            <div className="col-md-10">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}

export default Contact
