import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode } from "react-icons/fa";


function Nav(props) {

  const {
    selections = [],
    setCurrentSelection,
    currentSelection,
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
              <li onClick={(e) => setCurrentSelection(selections[0].name)} className={`navItem ${currentSelection==="About Me" ? 'selected' : 'notselected'}`}>
                  About me
              </li>
              <li onClick={() => setCurrentSelection(selections[1].name)} className={`navItem ${currentSelection==="Portfolio" ? 'selected' : 'notselected'}`}>
                <span>Portfolio</span>
              </li>
              <li onClick={() => setCurrentSelection(selections[2].name)} className={`navItem ${currentSelection==="Contact" ? 'selected' : 'notselected'}`}>
                <span>Contact</span>
              </li>
              <li onClick={() => setCurrentSelection(selections[3].name)} className={`navItem ${currentSelection==="Resume" ? 'selected' : 'notselected'}`}>
                <span>Resume</span>
              </li>
            </ul>
          </section>
    </nav>
  );
}

export default Nav;
