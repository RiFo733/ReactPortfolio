import React from 'react';
import './Footer.css';
import { Twitter, Facebook, Instagram, Phone, AtSign } from 'react-feather';


function Footer() {
    return(
        <footer className="footer">          
                    <div>
                    <Phone />440-865-8810          <AtSign />Rick.H.Font@gmail.com
                    </div>
                    <br />
                    <div><Twitter />          <Facebook />          <Instagram />
                    </div>
        </footer>
        );
}

export default Footer;