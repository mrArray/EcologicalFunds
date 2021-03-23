import React, { Component } from "react";
import { Redirect, Link} from 'react-router-dom';



export default class Home extends Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "./Landing/assets/js/core/jquery.min.js";
        script.src = "./Landing/assets/./";
        script.src = "./Landing/assets/js/core/popper.min.js";
        script.src = "./Landing/assets/js/core/bootstrap-material-design.min.js";
        script.src = "./Landing/assets/js/plugins/moment.min.js";
        script.src = "./Landing/assets/js/plugins/bootstrap-datetimepicker.js";
        script.src = "./Landing/assets/js/plugins/nouislider.min.js";
        script.src = "./Landing/assets/js/material-kit.js?v=2.0.7";
       

 
        script.async = true;
    
        document.body.appendChild(script);
    }


    render() {



        if (localStorage.getItem('user')) {
            return (<Redirect to={'/dashboard'} />)
        }
    return (

        <div>
    <div>
  <link href="./Landing/assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
  <link href="%PUBLIC_URL%/Landing/assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />
  <link href="%PUBLIC_URL%/Landing/assets/demo/demo.css" rel="stylesheet" />
</div>

  <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
      
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html">
        EFMC </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
           
          </li>
          <li className="nav-item">
          <Link to="/login" className="btn btn-primary btn-raised btn-lg" data-toggle="dropdown">
             Sign In
            </Link>
          </li>
          <li className="nav-item">
          <a className="nav-link" rel="tooltip" title data-placement="bottom" href="" target="_blank" data-original-title="">
              <i className="" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title data-placement="bottom" href="" target="_blank" data-original-title="">
              <i className="" />
            </a>
          </li>
          <li className="nav-item">
          <Link to="/register" className="btn btn-success btn-raised btn-lg" data-toggle="dropdown">
             Sign Up
            </Link>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: 'url("./Landing/assets/img/profile_city.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="title">Welcome to Ecological Fund Office</h1>
          <h3>Ecological Fund Office will serve as a strategic instrument for alleviating the challenges posed by Ecological Problems Nationwide through effective and efficient management.        </h3>
          <br />
          <Link to="/registerProject" target="" className="btn btn-white btn-raised btn-lg">
            <i className="fa fa-play" /> Request Project
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="main main-raised">
    <div className="container">
      <div className="section text-center">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <h2 className="title">Projects Process Flow</h2>
            <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
          </div>
        </div>
        <div className="features">
          <div className="row">
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="material-icons">info</i>
                </div>
                <h4 className="info-title">Request Project</h4>
                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                  
                <div className="icon icon-circle">
                  <i className="material-icons">circle </i>
                </div>
                <h4 className="info-title">Project Under Processing</h4>
                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
              <div className="icon icon-success">
                  <i className="material-icons">verified_user</i>
                </div>
                <h4 className="info-title">Project Approval</h4>
                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section text-center">
        <h2 className="title">Here is our team</h2>
        <div className="team">
          <div className="row">
            <div className="col-md-4">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-md-6 ml-auto mr-auto">
                    <img src="./Landing/assets/img/faces/avatar.jpg" alt="Thumbnail Image" className="img-raised rounded-circle img-fluid" />
                  </div>
                  <h4 className="card-title">Gigi Hadid
                    <br />
                    <small className="card-description text-muted">Model</small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                      <a href="#">links</a> for people to be able to follow them outside the site.</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-instagram" /></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-md-6 ml-auto mr-auto">
                    <img src="./Landing/assets/img/faces/christian.jpg" alt="Thumbnail Image" className="img-raised rounded-circle img-fluid" />
                  </div>
                  <h4 className="card-title">Christian Louboutin
                    <br />
                    <small className="card-description text-muted">Designer</small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                      <a href="#">links</a> for people to be able to follow them outside the site.</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-md-6 ml-auto mr-auto">
                    <img src="./Landing/assets/img/faces/kendall.jpg" alt="Thumbnail Image" className="img-raised rounded-circle img-fluid" />
                  </div>
                  <h4 className="card-title">Kendall Jenner
                    <br />
                    <small className="card-description text-muted">Model</small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                      <a href="#">links</a> for people to be able to follow them outside the site.</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-instagram" /></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-contacts">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <h2 className="text-center title">Work with us</h2>
            <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="bmd-label-floating">Your Name</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="bmd-label-floating">Your Email</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleMessage" className="bmd-label-floating">Your Message</label>
                <textarea type="email" className="form-control" rows={4} id="exampleMessage" defaultValue={""} />
              </div>
              <div className="row">
                <div className="col-md-4 ml-auto mr-auto text-center">
                  <button className="btn btn-primary btn-raised">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer footer-default">
    <div className="container">
      <nav className="float-left">
        <ul>
          <li>
            <a href="https://www.creative-tim.com/">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/presentation">
              About Us
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/blog">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright float-right">
        ©
        , made with <i className="material-icons">favorite</i> by
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a> for a better web.
      </div>
    </div>
  </footer>
</div>




    )
}
}