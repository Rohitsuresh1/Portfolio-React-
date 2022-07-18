import React from 'react';
import coverImage from '../../assets/Images/me.JPG';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hi there! This is me, Rohith. Thanks for checking out my website. I am a recent coding student who enjoys learning languages including coding languages. My educational and work experience is in Finance and Social Work but now I design websites. I live and work in Toronto.

        </p>
      </div>
    </section>
  );
}

export default About;
