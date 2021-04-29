import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea"
import CheckButton from "react-validation/build/button";
// import AuthService from "../services/auth.service";
// import { PostData } from "./PostData";
import Header from './Header';
import Footer from './Footer'
import axios from 'axios'
import AuthLogin from "../Authentications/AuthLogin";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect, Link, Router, Switch } from 'react-router-dom';
import Menu_Aside from "./Menu_Aside";
import Spinner from 'react-bootstrap/Spinner'





const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
// const required = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const email = value => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const descriptionValidation = value => {
//   if (!value.length < 50) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The Description must not Exceed 50 Characters
//       </div>
//     );
//   }
// };

// const vpassword = value => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

export default class RegisterProject extends Component {

  constructor(props) {
    super(props);
    this.handleRegisterProject = this.handleRegisterProject.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this)
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangeDueDate = this.onChangeDueDate.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      title: "",
      description: "",
      status: "",
      location: "",
      startDate: "",
      dueDate: "",
      loading: false,
      meloading: false,
      show: false,
      message: ""
    };
  }


  // "title": char(required, limit 50),
  // "description": char (required),
  // "status":  choice(open|inprogress|completed),
  //  "location": char(required, limit 50),
  // "manager": default to auth user,
  // "start_date": YYYY-MM-DD,
  // "due_date":  YYYY-MM-DD,



  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-1.js";
    script.async = true;


    document.body.appendChild(script);

  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeStartDate(e) {
    this.setState({
      start_date: e.target.value
    });
  }
  onChangeDueDate(e) {
    this.setState({
      due_date: e.target.value
    });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  handleRegisterProject(e) {
    e.preventDefault();

    // const username = 'admin'
    // const password = 'Pass@1234'
    // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    // axios.post("https://ecological.chinikiguard.com/projects/api/create/", {

    //   title: this.state.title,
    //   description: this.state.description,
    //   status: this.state.status,
    //   location: this.state.location,
    //   start_date: this.state.start_date,
    //   due_date: this.state.due_date

    // },

    //   {
    //     headers:
    //     {
    //       'Authorization': `Basic ${token}`,
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
    //       'Access-Control-Allow-Credentials': true
    //     },

    //   })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     // window.location = "/dashboard"
    //   })

    this.setState({
      message: "",
      successful: false,
      loading: true,
      meloading: true

    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthLogin.RegisterProject(
        this.state.title,
        this.state.description,
        this.state.location,
        this.state.status,
        this.state.start_date,
        this.state.due_date
      ).then(
        response => {
          this.setState({
            message: response.data.detail,
            successful: true,
            loading: false,
            meloading: false
          });
          window.location = "/AllProjects"
        },

        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
            loading: false,
            meloading: false
          });
        }
      );
    }
  }
  render() {

    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }



    return (

      <div>
        {/*begin::Main*/}
        <Header />

        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

              {/*begin::Content*/}
              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                  {/*end::Card*/}
                  {/*begin::Container*/}
                  <div className="container">

                    <div className="card card-custom">
                      <div className="card-body p-0">
                        {/*begin::Wizard*/}
                        <div className="wizard wizard-1" id="kt_wizard" data-wizard-state="step-first" data-wizard-clickable="false">
                          {/*begin::Wizard Nav*/}
                          <div className="wizard-nav border-bottom">
                            <div className="wizard-steps p-8 p-lg-10">
                              {/*begin::Wizard Step 1 Nav*/}
                              <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                                <div className="wizard-label">
                                  <i className="wizard-icon flaticon-list" />
                                  <h3 className="wizard-title">1. Setup Project Details</h3>
                                </div>
                                <span className="svg-icon svg-icon-xl wizard-arrow">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x={11} y={5} width={2} height={14} rx={1} />
                                      <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*begin::Wizard Step 4 Nav*/}
                              <div className="wizard-step" data-wizard-type="step">
                                <div className="wizard-label">
                                  <i className="wizard-icon flaticon-truck" />
                                  <h3 className="wizard-title">2. Project Duration</h3>
                                </div>
                                <span className="svg-icon svg-icon-xl wizard-arrow">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x={11} y={5} width={2} height={14} rx={1} />
                                      <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Wizard Step 4 Nav*/}

                              {/*begin::Wizard Step 5 Nav*/}
                              <div className="wizard-step" data-wizard-type="step">
                                <div className="wizard-label">
                                  <i className="wizard-icon flaticon-globe" />
                                  <h3 className="wizard-title">3. review & submit </h3>
                                </div>
                                <span className="svg-icon svg-icon-xl wizard-arrow last">
                                  {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg*/}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon points="0 0 24 0 24 24 0 24" />
                                      <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x={11} y={5} width={2} height={14} rx={1} />
                                      <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Wizard Step 5 Nav*/}

                              <div className="wizard-step" data-wizard-type="step">

                              </div>
                            </div>
                          </div>
                          {/*end::Wizard Nav*/}
                          {/*begin::Wizard Body*/}
                          <div className="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
                            <div className="col-xl-12 col-xxl-7">
                              {/*begin::Wizard Form*/}

                              <Form onSubmit={this.handleRegisterProject} ref={c => { this.form = c; }} className="form" id="kt_form">

                                {!this.state.successful && (
                                  <div>
                                    {/*begin::Wizard Step 1*/}
                                    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                                      <h3 className="mb-10 font-weight-bold text-dark">Setup Your Project Details</h3>
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Project Name <span class="text-danger">*</span></label>
                                        <Input type="text" className="form-control form-control-solid form-control-lg"
                                          value={this.state.title}
                                          onChange={this.onChangeTitle}
                                          validations={[required]}
                                          name="address1"
                                          placeholder="Project Name" />
                                        <span className="form-text text-muted">Please enter Project Name.</span>
                                      </div>
                                      {/*end::Input*/}
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Project Description <span class="text-danger">*</span></label>
                                        <Textarea type="text" className="form-control form-control-solid form-control-lg"
                                          value={this.state.description}
                                          onChange={this.onChangeDescription}
                                          validations={[required]}
                                          placeholder="Project Name"
                                          name="address1"

                                        />
                                        <span className="form-text text-muted">limit 50</span>
                                      </div>
                                      {/*end::Input*/}

                                      <div className="form-group">
                                        <label>Status <span class="text-danger">*</span></label>
                                        <select name="address1" className="form-control"
                                          value={this.state.status}
                                          onChange={this.onChangeStatus}
                                          validations={[required]}

                                        >
                                          <option value="">Select</option>
                                          <option value="open">Open</option>
                                          <option value="inprogress">In Progress</option>
                                          <option value="completed">Completed</option>
                                        </select>
                                      </div>


                                      <div className="row">

                                        <div className="col-xl-12">
                                          {/*begin::Select*/}
                                          <div className="form-group">
                                            <label>Project Location <span class="text-danger">*</span></label>
                                            <Textarea type="text" className="form-control form-control-solid form-control-lg"
                                              value={this.state.location}
                                              onChange={this.onChangeLocation}
                                              validations={[required]}
                                              name="address1"

                                            />
                                            <span className="form-text text-muted">limit 50</span>
                                          </div>
                                          {/*end::Select*/}
                                        </div>
                                        {/*end::Form Group*/}

                                        {/*end::Form Group*/}
                                      </div>
                                    </div>
                                    {/*end::Wizard Step 1*/}

                                    {/*begin::Wizard Step 3*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                      {/* <h4 className="mb-10 font-weight-bold text-dark">Select your Services</h4> */}
                                      {/*begin::Select*/}
                                      <div className="form-group">

                                        <div className="form-group">
                                          <label>Start Date <span class="text-danger">*</span></label>
                                          <Input type="date" className="form-control form-control-solid form-control-lg"
                                            value={this.state.start_date}
                                            onChange={this.onChangeStartDate}
                                            validations={[required]}
                                            placeholder="YYYY-MM-DD" />
                                          <span className="form-text text-muted">Start date</span>
                                        </div>



                                      </div>
                                      {/*end::Select*/}
                                      {/*begin::Select*/}
                                      <div className="form-group">
                                        <div className="form-group">
                                          <label>Due Date <span class="text-danger">*</span></label>
                                          <Input type="date" format="YYYY-MM-DD" className="form-control form-control-solid form-control-lg"
                                            value={this.state.due_date}
                                            onChange={this.onChangeDueDate}
                                            validations={[required]}
                                          />
                                          <span className="form-text text-muted">Due date</span>
                                        </div>
                                      </div>
                                      {/*end::Select*/}

                                    </div>
                                    {/*end::Wizard Step 3*/}

                                    {/*begin::Wizard Step 5*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                      {/*begin::Section*/}
                                      <h4 className="mb-10 font-weight-bold text-dark">Review your Details and Submit</h4>
                                      <h6 className="font-weight-bolder mb-3">Project Detailss:</h6>
                                      <div className="text-dark-50 line-height-lg">
                                        <div>Project Name</div>
                                        <div>{this.state.title}</div>
                                        <div>Project Description</div>
                                        <div>{this.state.description}</div>
                                        <div>Project Location</div>
                                        <div>{this.state.location}</div>
                                      </div>
                                      <div className="separator separator-dashed my-5" />
                                      {/*end::Section*/}
                                      {/*begin::Section*/}
                                      <h6 className="font-weight-bolder mb-3">Project Duration</h6>
                                      <div className="text-dark-50 line-height-lg">
                                        <div>Project Status</div>
                                        <div>{this.state.status}</div>
                                        <div>Start Date</div>
                                        <div>{this.state.start_date}</div>
                                        <div>Due Date</div>
                                        <div>{this.state.due_date}</div>
                                      </div>
                                    </div>

                                    {/*end::Wizard Step 5*/}
                                    {/*begin::Wizard Step 5*/}
                                    <center>
                                      <button id="kt_login_singin_form_submit_button"
                                        className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                                        data-wizard-type="step-content"
                                        disabled={this.state.meloading}


                                      >
                                        {this.state.meloading && (
                                          <center><Spinner animation="border" variant="white" /></center>
                                        )}
                                        <span>submit</span>
                                      </button>
                                    </center>
                                  </div>
                                )}
                                <center>


                                  {this.state.message && (

                                    <div className="pb-5" >
                                      <div
                                        className={
                                          this.state.successful
                                            ? "alert alert-custom alert-outline-success fade show mb-5"
                                            : "alert alert-custom alert-outline-danger fade show mb-5"
                                        }
                                        role="alert"
                                      >
                                        {this.state.message}
                                      </div>
                                    </div>
                                  )}</center>

                                <div className="d-flex justify-content-between border-top mt-5 pt-10">
                                  <div className="mr-2">
                                    <button type="button" className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-prev">Previous</button>
                                  </div>
                                  <div>

                                    <button type="button" className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-next">Next</button>
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




                                    {/* <Modal show={this.state.show} onHide={this.handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body> {this.state.message}</Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                          Close
                                      </Button>
                                        <Button variant="primary" onClick={this.handleClose}>
                                          Save Changes
                                     </Button>
                                       </Modal.Footer>
                                    </Modal> */}





                                    <CheckButton
                                      style={{ display: "none" }}
                                      ref={c => {
                                        this.checkBtn = c;
                                      }}
                                    />
                                  </div>
                                </div>

                                {/*end::Wizard Actions*/}
                              </Form>

                              {/*end::Wizard Form*/}
                            </div>
                          </div>
                          {/*end::Wizard Body*/}
                        </div>
                        {/*end::Wizard*/}
                      </div>
                      {/*end::Wizard*/}
                    </div>
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Entry*/}
              </div>
              {/*end::Content*/}
              <Footer />
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::Main*/}

      </div>

    );
  }
}