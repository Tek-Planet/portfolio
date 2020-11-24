import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class Portfolio extends Component {

  constructor(props){
    super(props);
    this.state = {
      works: []
    };

  }

    // method tyo search movie
   fetchData () {
      const url = (`https://us-central1-tek-portfolio.cloudfunctions.net/api/projects`);
            axios.
            get(url)
             .then(res => {
               this.setState({
                 works: res.data,
               })
             })
             .catch(err => {
               console.log(err)
             })    
    };

    componentDidMount(){
      this.fetchData();
    }

  render() {
    const { works } = this.state;
    if(this.state.works){
      var projects =  works.map((projects,i) => 
       <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
           <Link to={{
              pathname: '/project',
              state: {
                project: projects
              }
            }}
           >
               <img alt={projects.title} src={projects.imgOne} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.tools}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </Link>
          </div>
        </div>
      )
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
