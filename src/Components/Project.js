import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Project.css'
import {useLocation} from 'react-router-dom'
 
const slideImages = [
        "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335",
        "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335",
        "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335",
        "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335"
];
 
const Slideshow = () => {
        const location = useLocation() 
        const {project} = location.state
        console.log(project) 

    return (
      <div>

      
      <div className="row">
         <div className='page__info'><p className='page__title'>Project Details</p></div>
          <aside className="four columns footer-widgets">
            <div className="slide-container">
               <div className="widget widget_contact">
               <Slide
                indicators = {true}
                easing="ease">   
                <img className='checkoutProduct__image' src={project.imgOne} />       
                <img className='checkoutProduct__image' src={project.imgTwo} />   
                <img className='checkoutProduct__image' src={project.imgThree} />    
                <img className='checkoutProduct__image' src={project.imgFour} />      
                </Slide>
		</div>
                </div>
          </aside>
          <div className="eight columns">
                <div >
                    <p className='checkoutProduct__title'>{project.title}</p>
                    <p className="checkoutProduct__price"><strong>Technologies: </strong>{project.tools}    </p>
                    <p className="checkoutProduct__price">{project.body}    </p>
                
                </div>
            </div>
      </div>
      </div>
    
    )
}

export default Slideshow