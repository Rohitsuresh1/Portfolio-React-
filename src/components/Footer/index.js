import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import { FaLinkedinIn,FaGithub, FaTwitter } from "react-icons/fa";


function Footer() {
	return (
		<footer className="p-2 d-flex justify-content-center">
			
            <div class="navbar fixed-bottom justify-content-center">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/rohitsuresh1"
						class="social-icon"
					>
                        <FaGithub size={42}/>
					</a>
				
				
					<a
						target="_blank"
						rel="noreferrer"
						href="https://linkedin.com/in/rohith-suresh/"
						class="social-icon"
					>
                       <FaLinkedinIn size={42}/>
					</a>
				
				
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/"
						class="social-icon"
					>
                        <FaTwitter size={42}/>
					</a>
				
            </div>
		</footer>
	);
}

export default Footer;