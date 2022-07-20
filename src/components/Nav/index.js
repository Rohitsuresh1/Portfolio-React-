import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode } from "react-icons/fa";


function Nav(props) {

  const {
    selections = [],
    setCurrentSelection,
  } = props;

  return (
    <nav className="flex-row">
          <h2 className='headers nameEl'>
            <a href="/" style={{ textDecoration: 'none', color:'white', display:'inline'}}>
              <FaLaptopCode size={36} color={'white'}/>{'   '}Rohith Suresh 
            </a>
          </h2>
          <section className='headers navHeaders'>
            <ul className='navUl' style={{display:'inline-flex'}} >
              <li className='navItem' onClick={() => setCurrentSelection(selections[0].name)}>
                  About me
              </li>
              <li className='navItem' onClick={() => setCurrentSelection(selections[1].name)}>
                <span>Portfolio</span>
              </li>
              <li className='navItem' onClick={() => setCurrentSelection(selections[2].name)}>
                <span>Contact</span>
              </li>
              <li className='navItem' onClick={() => setCurrentSelection(selections[3].name)}>
                <span>Resume</span>
              </li>
            </ul>
          </section>
    </nav>
  );
}

export default Nav;
