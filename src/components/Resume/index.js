import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {

  return (
    <div style={{marginLeft: '50px'}}>
        <h1 style={{fontWeight:'bold', marginBottom:'25px'}} data-testid="h1tag">Resume</h1>
        <a href={`https://docs.google.com/uc?id=1LttXmFl2cTUzybiN24AG8s6FwNB3433d&export=download`}download='Rohith Suresh Resume.docx'>
        Download Resume here
        </a>
        <div className='flex-container'>
            <div className='flex-child'>
                <h3 style={{marginTop:'25px', marginLeft:'25px'}}>Front-end Proficiencies</h3>
                <ul style={{marginLeft:'25px'}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>BootStrap</li>
                    <li>jQuery</li>
                    <li>Handlebars</li>
                    <li>React</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            <div className='flex-child'>
                <h3 style={{marginTop:'25px', marginLeft:'25px'}}>Back-end Proficiencies</h3>
                <ul style={{marginLeft:'25px', marginBottom:'25px'}}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>APIs</li>
                    <li>IndexedDB</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    <li>Progressive Web Applications</li>
                
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Resume;
