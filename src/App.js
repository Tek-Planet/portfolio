import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Project from './Components/Project';
import Payment from './Components/Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      projects: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }
  //https://us-central1-tek-portfolio.cloudfunctions.net/api/projects
  componentDidMount(){
    this.getResumeData();
  }


  render() {
    return (
      <Router>
      <div className="App">
       
        <Switch>
          
          <Route path="/project">
            <Project />
        
          </Route>       
          <Route path="/">
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio />
          <Testimonials data={this.state.resumeData.testimonials}/>
          <Contact data={this.state.resumeData.main}/>  
          <Payment />       
          <Footer data={this.state.resumeData.main}/>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
