import React from 'react';
import coverImage from '../../assets/Images/me.jpg';
function About() {
  return (
    <section className="my-5" style={{backgroundColor:'#deffff'}}>
      <section className='item1'>
        <img src={coverImage} className="my-2 myimg" style={{ width: "100%", marginLeft:"-100px" }} alt="cover" key='cover image'/>
      </section>
      <div className="my-2 item2" style={{marginLeft:'-60px', width:'70%'}}>
        <h1 style={{fontWeight:'bold'}} id="about">About me</h1>
        <p>
        <h3 style={{marginTop:'25px'}}>Hi there, I am Rohith!</h3>
        Thanks for checking out my website. I am a full stack developer who enjoys learning languages including coding languages and problem solving. My educational and work experience is in Finance and Social Work but now I design websites. I live and work in Toronto.
        </p>
      </div>
    </section>
  );
}

export default About;
