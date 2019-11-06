import React from 'react';
import cr from './cr.png';
import lin from './lin.png';
const Footer = () => {
    return (
        <div className='fahad'>

        <div className="footer">
            <img className='cr' src = {cr} alt="copyright" />
            <h3>copyright © Fahad's. All right reserved</h3>
           <a href='https://www.linkedin.com/in/fahadaldawish'> <img className='in' src = {lin} alt="Linkedin" /></a>
        </div>
        </div>
    )
}
export default Footer;
