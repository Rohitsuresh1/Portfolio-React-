import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImgOverlay } from 'image-overlay-react';
import 'image-overlay-react/dist/index.css';
import { FaLink, FaGithub } from "react-icons/fa";

function Project({name,github,deployed,image,alt}) {

    return (

        <div  className='appImage' style={{display:'inline'}}>
            <ImgOverlay imgSrc={image.default} alt={alt} style={{height:'250px', width:'300px'}}
              bgColor='#AED9E9'
              position='right'
              width='300px'
              height='200px'
              fSize='48px'
              fColor='gray'
            >
                <div> <p>{name}</p>
                <a style={{ textDecoration: 'none'}} href={github}> <FaGithub size={28} color={'black'}/>{'    '}</a>
                <a style={{ textDecoration: 'none'}} href={deployed}> <FaLink size={28} color={'black'}/> </a>
                </div>
            </ImgOverlay>
          </div>
    );
}

export default Project;