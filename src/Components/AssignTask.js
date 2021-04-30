import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Textarea from "react-validation/build/textarea"

// import AuthService from "../services/auth.service";
// import { PostData } from "./PostData";
import { Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import AuthLogin from "../Authentications/AuthLogin";
import axios from "axios";
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

export default class AssignTask extends Component {

  constructor(props) {
    super(props);
    this.handleRegisterTask = this.handleRegisterTask.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this)
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangeDueDate = this.onChangeDueDate.bind(this)
    this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this)
    this.onChangeProject = this.onChangeProject.bind(this)


    this.state = {
      project: "",
      title: "",
      description: "",
      status: "",
      location: "",
      start_date: "",
      due_date: "",
      assigned_to: "",
      loading: false,
      show: false,
      message: ""
    };
  }
  componentDidMount() {
    //check if user is login 
    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }
    const script = document.createElement("script");

    script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-3.js";
    script.async = true;
    document.body.appendChild(script);
  }
  componentWillMount() {


    const username = 'admin'
    const password = 'Pass@1234'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    axios.get("https://ecological.chinikiguard.com/projects/api/list/?all_record=1",
      {
        headers:
        {
          'Authorization': `Basic ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
          'Access-Control-Allow-Credentials': true
        },

      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("AllProjectData", JSON.stringify(res.data));



        }
        // console.log(res);
        // console.log(res.data);
        // window.location = "/dashboard"
      })

  }


  onChangeProject(e) {
    this.setState({
      project: e.target.value
    });
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

  onChangeAssignedTo(e) {
    this.setState({
      assigned_to: e.target.value
    });
  }

  handleRegisterTask(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
      loading:true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthLogin.RegisterTask(
        this.state.project,
        this.state.title,
        this.state.description,
        this.state.location,
        this.state.status,
        this.state.start_date,
        this.state.due_date,
        this.state.assigned_to
      ).then(
        response => {
          this.setState({
            message: response.data.detail,
            successful: true
          });
          window.location = "/Alltasks"
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
            loading: false
          });
        }
      );
    }
  }

  render() {

    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }

    const projectId = JSON.parse(localStorage.getItem('AllProjectData'))
    // console.log(projectId)
    const UsersIds = JSON.parse(localStorage.getItem('AllUsersData'))

    const { loading } = this.state;
    

    // if (this.state.redirectToReferrer) {
    //     return (<Redirect to={'/dashboard'} />)
    // }

    // if (sessionStorage.getItem('token')) {
    //     return (<Redirect to={'/dashboard'} />)
    // }
    return (
      <div>

        <Header />


        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

              {/*begin::Content*/}
              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

                <div className="d-flex flex-column-fluid">


                  {/*begin::Container*/}
                  <div className="container">

                    <div className="card card-custom">
                      <div className="card-body p-0">
                        {/*begin: Wizard*/}
                        <div className="wizard wizard-3" id="kt_wizard_v3" data-wizard-state="step-first" data-wizard-clickable="true">
                          {/*begin: Wizard Nav*/}
                          <div className="wizard-nav">
                            <div className="wizard-steps px-8 py-8 px-lg-15 py-lg-3">
                              {/*begin::Wizard Step 1 Nav*/}
                              <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                                <div className="wizard-label">
                                  <h3 className="wizard-title">
                                    <span>1.</span>Project Selection</h3>
                                  <div className="wizard-bar" />
                                </div>
                              </div>
                              {/*end::Wizard Step 1 Nav*/}
                              {/*begin::Wizard Step 2 Nav*/}
                              <div className="wizard-step" data-wizard-type="step">
                                <div className="wizard-label">
                                  <h3 className="wizard-title">
                                    <span>2.</span>Task Assignment</h3>
                                  <div className="wizard-bar" />
                                </div>
                              </div>
                              {/*end::Wizard Step 2 Nav*/}
                              <div className="wizard-step" data-wizard-type="step">

                              </div>

                            </div>
                          </div>
                          {/*end: Wizard Nav*/}
                          {/*begin: Wizard Body*/}
                          <div className="row justify-content-center py-10 px-8 py-lg-12 px-lg-10">
                            <div className="col-xl-12 col-xxl-7">
                              {/*begin: Wizard Form*/}
                              <Form onSubmit={this.handleRegisterTask} ref={c => { this.form = c; }}   className="form" id="kt_form">
                                {!this.state.successful && (
                                  <div>
                                    {/*begin: Wizard Step 1*/}
                                    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                                      <h4 className="mb-10 font-weight-bold text-dark">Assign Task to a Project</h4>
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Projects</label>
                                        <select
                                         name="address1"
                                         className="form-control"
                                          value={this.state.project}
                                          onChange={this.onChangeProject}
                                          validations={[required]}
                                        >
                                          <option value="">Select</option>
                                          {projectId.map(project => (

                                            <option value={`${project.pk}`}>{project.title}</option>
                                          ))}
                                        </select>
                                      </div>

                                      {/*end::Input*/}
                                      <div className="form-group">
                                        <label>Status</label>
                                        <select 
                                        name="address1"
                                         className="form-control"
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

                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Task Name</label>
                                        <Input
                                         type="text"
                                         className="form-control"
                                         name="address1"
                                          value={this.state.title}
                                          onChange={this.onChangeTitle}
                                          validations={[required]}
                                          placeholder="task name" />
                                        <span className="form-text text-muted">Please enter Task Name.</span>
                                      </div>
                                      {/*end::Input*/}
                                      <div className="row">
                                        <div className="col-xl-12">
                                          {/*begin::Input*/}
                                          <div className="form-group">
                                            <label>Task Description</label>
                                            <Textarea 
                                            type="text" className="form-control" 
                                            name="address1"
                                              value={this.state.description}
                                              onChange={this.onChangeDescription}
                                              validations={[required]}
                                              placeholder="task description" />
                                            <span className="form-text text-muted">Please enter Task Description.</span>
                                          </div>
                                          {/*end::Input*/}
                                        </div>


                                      </div>
                                    </div>
                                    {/*end: Wizard Step 1*/}
                                    {/*begin: Wizard Step 2*/}
                                    <div className="pb-5" data-wizard-type="step-content">
                                      <h4 className="mb-10 font-weight-bold text-dark">Task Assignment Details</h4>
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Assign To</label>
                                        <select 
                                        name="address1" 
                                        className="form-control"
                                          value={this.state.assigned_to}
                                          onChange={this.onChangeAssignedTo}
                                          validations={[required]}
                                        >
                                          
                                          <option value>Select</option>
                                          {UsersIds.map(users => (

                                            <option value={`${users.pk}`}>{`${users.first_name} ${users.last_name} `}</option>
                                         ))}
                                            {/* <option value='1'>Alh Sani Umar Suleman</option> */}

                                        </select>
                                      </div>
                                      {/*end::Input*/}
                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Task Location</label>
                                        <Textarea type="text" 
                                        className="form-control"
                                          value={this.state.location}
                                          onChange={this.onChangeLocation}
                                          validations={[required]}
                                          placeholder="task location"
                  />
                                        <span className="form-text text-muted">Please enter Task Location.</span>
                                      </div>
                                      {/*end::Input*/}

                                      {/*begin::Input*/}
                                      <div className="form-group">
                                        <label>Task Start Date</label>
                                        <input type="date"
                                          format="YYYY-MM-DD" 
                                          className="form-control"
                                          value={this.state.start_date}
                                          onChange={this.onChangeStartDate}
                                          validations={[required]}
                                           placeholder="YYYY-MM-DD"
                                          />
                                        <span className="form-text text-muted">Please enter Task start date.</span>
                                      </div>
                                      {/*end::Input*/}
                                      <div className="form-group">
                                        <label>Task Due Date</label>
                                        <input type="date" 
                                        format="YYYY-MM-DD" 
                                        className="form-control" 
                                          value={this.state.due_date}
                                          onChange={this.onChangeDueDate}
                                          validations={[required]}
                                          placeholder="YYYY-MM-DD" />
                                        <span className="form-text text-muted">Please enter Task Due Date.</span>
                                      </div>
                                    </div>
                                    {/*end::Wizard Step 5*/}
                                    {/*begin::Wizard Step 5*/}
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
                                {/*end: Wizard Step 2*/}

                                {/*begin: Wizard Actions*/}
                                <div className="d-flex justify-content-between border-top mt-5 pt-10">
                                  <div className="mr-2">
                                    <button type="button" className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-prev">Previous</button>
                                  </div>
                                  <div>
                                    <button type="button" className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-next">Next</button>
                                    <button id="kt_login_singin_form_submit_button"
                                      className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                                      data-wizard-type="step-content"
                                      enabled={this.state.loading}

                                    >
                                      {this.state.loading && (
                                        <center><Spinner animation="border" variant="white" /></center>
                                      )}
                                      <span>Assign</span>
                                    </button>
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
                              {/*end: Wizard Form*/}
                            </div>
                          </div>
                          {/*end: Wizard Body*/}
                        </div>
                        {/*end: Wizard*/}
                      </div>

                    </div>
                    <Footer />

                  </div>

                  {/*end::Container*/}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>





    );
  }
}