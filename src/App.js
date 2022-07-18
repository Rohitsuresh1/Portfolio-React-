import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [sections] = useState([
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

  
  return (
    <div>
      <Nav></Nav>
      <main>
        
            <About></About>
            <Portfolio></Portfolio>
            <ContactForm></ContactForm>
     
      </main>
    </div>
  );
}

export default App;
