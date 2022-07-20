import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode } from "react-icons/fa";


function Nav(props) {

  const {
    selections = [],
    setCurrentSelection,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <FaLaptopCode size={36}/>{'   '}Rohith Suresh 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setCurrentSelection(selections[0].name)}>
              About me
            </a>
          </li>
          <li className= "mx-2" onClick={() => setCurrentSelection(selections[1].name)}>
            <span>Portfolio</span>
          </li>
          <li className="mx-2" onClick={() => setCurrentSelection(selections[2].name)}>
            <span>Contact</span>
          </li>
          <li className="mx-2" onClick={() => setCurrentSelection(selections[3].name)}>
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
