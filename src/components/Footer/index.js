import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import { FaLinkedinIn,FaGithub, FaTwitter } from "react-icons/fa";


function Footer() {
	return (
		<footer className="p-2 d-flex fixed-bottom justify-content-center" style={{height:'65px',backgroundColor:'#AED9E9'}}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/rohitsuresh1"
						class="social-icon"
					>
                        <FaGithub size={42} color={'black'}/>
					</a>
				
				
					<a
						target="_blank"
						rel="noreferrer"
						href="https://linkedin.com/in/rohith-suresh/"
						class="social-icon"
					>
                       <FaLinkedinIn size={42} color={'black'}/>
					</a>
				
				
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/"
						class="social-icon"
					>
                        <FaTwitter size={42} color={'black'}/>
					</a>		
		</footer>
	);
}

export default Footer;