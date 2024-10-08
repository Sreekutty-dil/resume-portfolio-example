import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Contact(props) {
    return(
        <div className="container">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>

            <div className="contact-container">
                <div className="left">
                <div className="info">
                        <h3>Address</h3>
                    </div>
                    <ul className="list">
                        <li>
                            <strong>Email</strong>
                            <span>sreekuttydilku@gmail.com</span>
                        </li>
                        <li>
                            <strong>Mobile</strong>
                            <span>6282899583</span>
                        </li>
                        <li>
                            <strong>Address</strong>
                            <address>
                                Andhoorvalippil House <br />
                                Panthallor <br />
                                Thrissur, Kerala <br />
                            </address>
                        </li>
                    </ul>
                    <div className="info">
                        <h3>Social Media Links</h3>
                    </div>
                    <div className="icons">
                        <Link to={'https://github.com/Sreekutty-dil'} className='link' target='-blank' > <FaGithubSquare/> </Link>
                        <Link to={'https://www.linkedin.com/in/sreekutty-p-s'} className='link' target='-blank' > <FaLinkedin/> </Link>
                        <Link to={'https://www.instagram.com/sreekutty-dil-kumar'} className='link' target='-blank' > <FaInstagramSquare/> </Link>
                        <Link to={'https://www.twitter.com/'} className='link' target='-blank' > <FaXTwitter/> </Link>
                        <Link to={'https://www.facebook.com/'} className='link' target='-blank' > <FaFacebook/> </Link>
                        
                    </div>
                </div>
          

             <div className="right">
                <form autoComplete="off">
                    <fieldset>
                        <legend className='form-title'>Contact Me</legend>
                        <div className="input-item">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id='name' className='form-input' required />
                        </div>
                        <div className="input-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' className='form-input' required />
                        </div>
                        <div className="input-item">
                            <label htmlFor="msg">Massage</label>
                            <textarea type="msg" name='msg' id='msg' className='form-input' cols={30} rows={6} required ></textarea>
                        </div>
                        <div className="input-item">
                           <input type="submit" value="Send" className='btn success' />
                        </div>
                        
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
    )
}