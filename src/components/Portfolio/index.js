import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'image-overlay-react/dist/index.css';
import Project from '../Project';

function Portfolio() {
  const apps = [
    {
      name: 'Health Buddy',
      github: 'https://github.com/healthree/health-buddy',
      deployed: 'https://health-buddy-group3.herokuapp.com/',
      image: require('../../assets/Images/Health-buddy.png'),
      alt: 'Screen shot of Health Buddy App',
    },
    {
      name: 'Getaway From GTA',
      github: 'https://github.com/TeamGTA/GetawayfromGTA',
      deployed: 'https://teamgta.github.io/GetawayfromGTA/',
      image: require('../../assets/Images/GetawayfromGTA.png'),
      alt: 'Screen shot of Getawayfrom GTA App',
    },
    {
      name: 'Budget Tracker PWA',
      github: 'https://github.com/Rohitsuresh1/Budget-Tracker-PWA',
      deployed: 'https://bref-madame-10247.herokuapp.com/',
      image: require('../../assets/Images/Budgettracker.png'),
      alt: 'Screen shot of Budget Tracker App',
    },
    {
      name: 'Note Taker',
      github: 'https://github.com/Rohitsuresh1/Note-taker',
      deployed: 'https://best-notes-ever.herokuapp.com',
      image: require('../../assets/Images/Notetaker.png'),
      alt: 'Screen shot of Note Taker App',
    },
    {
      name: 'Bio',
      github: 'https://github.com/Rohitsuresh1/Bio',
      deployed: 'https://rohitsuresh1.github.io/Bio/',
      image: require('../../assets/Images/Bio.png'),
      alt: 'Screen shot of Bio',
    },
    {
      name: 'Weather Dashboard',
      github: 'https://github.com/Rohitsuresh1/Weather-Dashboard',
      deployed: 'https://rohitsuresh1.github.io/Weather-Dashboard/',
      image: require('../../assets/Images/Weatherapp.png'),
      alt: 'Screen shot of Weather Dashboard App',
    },
  ];

  return (
    <section>
      <h1 style={{fontWeight:'bold', marginLeft:'50px'}} >My Recent Projects</h1>
      <div className="container con1" style={{display:'inline'}}>

        {apps.map((app,id) => {
          return(
            <Project
              key={id}
              name={app.name}
              github={app.github}
              deployed={app.deployed}
              image={app.image}
              alt={app.alt}
            />
          );
        })}


      </div>
    </section>
  );
}
export default Portfolio;
