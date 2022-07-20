import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selections] = useState([
		{
			name: "About Me",
		},
		{
			name: "Portfolio",
		},
		{
			name: "Contact",
		},
		{
			name: "Resume",
		},
	]);

  const [currentSelection, setCurrentSelection] = useState(selections[0].name);
  
  return (
    <div>
      <Nav
      selections={selections}
      setCurrentSelection={setCurrentSelection}
      currentSelection={currentSelection}
      ></Nav>
      <main>
           { currentSelection==="About Me" && <About></About> }
           { currentSelection==="Portfolio" && <Portfolio></Portfolio> }
           { currentSelection==="Contact" && <ContactForm></ContactForm> }
           { currentSelection==="Resume" && <Resume></Resume> }     

      </main>
        <Footer/>
    </div>
  );
}

export default App;
