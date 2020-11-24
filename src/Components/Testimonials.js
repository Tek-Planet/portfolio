import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Testimonials.css'

class Testimonials extends Component {
  render() {

   //  if(this.props.data){
   //    var testimonials = this.props.data.testimonials.map(function(testimonials){
   //      return  <li key={testimonials.user}>
   //          <blockquote>
   //             <p>{testimonials.text}</p>
   //             <cite>{testimonials.user}</cite>
   //          </blockquote>
   //       </li>
   //    })
   //  }

   const slideImages = [
      "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335",
      "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335",
      "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335",
      "https://firebasestorage.googleapis.com/v0/b/tek-portfolio.appspot.com/o/493564140893.png?alt=media&token=2311fbb3-77ef-47d9-8a97-44a16c479335"
];


    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="three columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="six columns">
                  {/* <ul className="slides">
                      {testimonials}
                  </ul> */}
               <Slide
                arrows   = {false}
                indicators = {true}
                easing="ease">   
                <img className='checkoutProduct__image' src={require('../img/reviews/r1.png')} />  
                <img className='checkoutProduct__image' src={require('../img/reviews/r2.png')} />  
                <img className='checkoutProduct__image' src={require('../img/reviews/r3.png')} />         
                </Slide>
            </div>
            <div className="three">
              
            </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
