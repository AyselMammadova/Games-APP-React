import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {

    const form = useRef();

    const [username, setUsername] = useState('');

    const handleInput = (e) => {
        setUsername(e.target.value);
    }

    const Success = () => {
        return(
            <p className='text-white text-center border-bottom mb-5'>
                Hörmətli <strong style={{fontSize: "18px"}}>{username}</strong>, mesajınız uğurla göndərildi. Ən qısa zamanda sizinlə əlaqə saxlanılacaq.
            </p>
        )
    }


    const [result, setResult] = useState(false);
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ejia5qh', 'template_7v1hdl9', form.current, 'qGLE9IdxIVPuq2sho')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        setResult(true);
    };


    return (
        <div className="contact-form rounded-4">

            {result ? <Success /> : ''}

            <form ref={form} onSubmit={sendEmail}>
                <div className="custom-form-control mb-4">
                    <label htmlFor="username" className="form-label">Ad, Soyad</label>
                    <input type="text" autoComplete="off" className="form-control" 
                    onChange={handleInput} name="username" id="username" required />
                </div>

                <div className="custom-form-control mb-4">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="e-mail" autoComplete="off" className="form-control" 
                    name="email" id="email" required />
                </div>

                <div className="custom-form-control mb-4">
                    <label htmlFor="message" className="form-label">Mesaj</label>
                    <textarea rows="5" autoComplete="off" className="form-control" 
                    name="message" id="message" required></textarea>
                </div>

                <button type="submit" className="btn submit-btn">Göndər</button>
                <div className="clearfix"></div>
            </form>
        </div>
    )

}

export default ContactForm;
