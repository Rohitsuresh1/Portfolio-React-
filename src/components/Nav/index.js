import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

  const {
    selections = [],
    setCurrentSelection,
    currentSelection,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Rohith Suresh
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
