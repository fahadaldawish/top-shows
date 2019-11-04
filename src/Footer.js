import React from 'react';
import cr from './cr.png';
import lin from './lin.png';
const Footer = () => {
    return (
        <div className='container'>

        <div className="footer">
            <img className='cr' src = {cr} alt="copyright" />
            <h3>copyright © Fahad's. All right reserved</h3>
            <img className='in' src = {lin} alt="Linkedin" />
        </div>
        </div>
    )
}
export default Footer;
