import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImgOverlay } from 'image-overlay-react';
import 'image-overlay-react/dist/index.css';
import { FaLink, FaGithub } from "react-icons/fa";

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

        {apps.map((app) => {
          return (

              <div  className='appImage' style={{display:'inline'}}>
                  <ImgOverlay imgSrc={app.image.default} alt={app.alt} style={{height:'250px', width:'300px'}}
                    bgColor='#AED9E9'
                    position='right'
                    width='300px'
                    height='200px'
                    fSize='48px'
                    fColor='gray'
                  >
                      <div> <p>{app.name}</p>
                      <a style={{ textDecoration: 'none'}} href={app.github}> <FaGithub size={28} color={'black'}/>{'    '}</a>
                      <a style={{ textDecoration: 'none'}} href={app.deployed}> <FaLink size={28} color={'black'}/> </a>
                      </div>
                  </ImgOverlay>
                </div>
          );
        })}


      </div>
    </section>
  );
}
export default Portfolio;
