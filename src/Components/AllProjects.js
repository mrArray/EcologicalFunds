import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import Spinner from 'react-bootstrap/Spinner'
import axios from "axios";
import AuthLogin from "../Authentications/AuthLogin";



export default class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      myloading: true,
      loading: false,
      show: false,
      message: "",
      allProzz: [],
      showAdministrator: false,
      showTaskManager: false,
      showProjectManager: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {

    //check if user is login
    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }
    //user  stored user information (including JWT) from AuthService class
    const user = AuthLogin.getCurrentUser();
    //check User Group
    if (user) {
      this.setState({
        currentUser: user,
        showAdministrator: user.profile.user_groups.includes("ADMINISTRATOR"),
        showTaskManager: user.profile.user_groups.includes("TASK MANAGER"),
        showProjectManager: user.profile.user_groups.includes("PROJECT MANAGER"),
      });
    }
    const mytoken = AuthLogin.getCurrentUser();
    const token = mytoken.token;
    axios.get("https://ecological.chinikiguard.com/projects/api/list/?all_record=1&for_user=true",
      {
        headers:
        {
          'Authorization': `Token ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
          'Access-Control-Allow-Credentials': true
        },

      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("AllProjectData", JSON.stringify(res.data));
          localStorage.setItem("AllProjectsTasks", JSON.stringify(data));

        }
        // console.log(res);
        // console.log(res.data);
        this.setState({ allProzz: res.data, myloading: false });
      })

    const data =
      [
        {
          "pk": 9,
          "project": 1,
          "project_name": "--------",
          "title": "--------",
          "description": "--------",
          "status": "open",
          "location": "--------",
          "assigned_by": "--------",
          "assigned_to": '--------',
          "assigned_to_name": "--------",
          "start_date": "--------",
          "due_date": "--------",
          "progress": "--------%",
          "created": "--------",
          "updated": "--------"
        },
        {
          "pk": 9,
          "project": 1,
          "project_name": "--------",
          "title": "--------",
          "description": "--------",
          "status": "open",
          "location": "--------",
          "assigned_by": "--------",
          "assigned_to": '--------',
          "assigned_to_name": "--------",
          "start_date": "--------",
          "due_date": "--------",
          "progress": "--------%",
          "created": "--------",
          "updated": "--------"
        }, {
          "pk": 9,
          "project": 1,
          "project_name": "--------",
          "title": "--------",
          "description": "--------",
          "status": "open",
          "location": "--------",
          "assigned_by": "--------",
          "assigned_to": '--------',
          "assigned_to_name": "--------",
          "start_date": "--------",
          "due_date": "--------",
          "progress": "--------%",
          "created": "--------",
          "updated": "--------"
        }
      ]



  }

  DeleteProject(project) {

    const mytoken = JSON.parse(localStorage.getItem('user'));
    const token = mytoken.token;
    const PIds = project.pk;
    axios.delete(`https://ecological.chinikiguard.com/projects/api/delete/${PIds}/`,
      {
        headers:
        {
          'Authorization': `Token ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json'
        },
      })
      .then(res => {

        console.log(res);
        console.log(res.data);
        this.setState({ loading: true });

        window.location = "/allprojects"

      })

  }
  EditProject(project) {
    localStorage.setItem("singleProjects", JSON.stringify(project));
    // console.log(project.pk)

    const mytoken = JSON.parse(localStorage.getItem('user'));
    const token = mytoken.token;
    axios.get(`https://ecological.chinikiguard.com/projects/api/tasks/list/?for_user=true&project=${project.pk}`,
      {
        headers:
        {
          'Authorization': `Token ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
          'Access-Control-Allow-Credentials': true
        },
        // params: {
        //   project: `${project}`
        // }

      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("AllProjectsTasks", JSON.stringify(res.data));
        }
        // console.log(res);
        // console.log(res.data);
        window.location = "/EditProject"

      })


  }


  render() {

  

    const { currentUser, showAdministrator, showTaskManager, showProjectManager } = this.state;

    return (
      <div>
        <Header />
        <div className="d-flex flex-column flex-root"  >

          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
              {/*begin::Content*/}
              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                  {/*begin::Container*/}
                  <div className="container">
                    {showAdministrator && (

                      <div class="row">
                        <div className="col-xl-12">
                          {/*begin::Nav Panel Widget 1*/}
                          <div className="card card-custom gutter-b">
                            {/*begin::Body*/}
                            <div className="card-body">
                              {/*begin::Nav Tabs*/}
                              <ul className="dashboard-tabs nav nav-pills nav-success row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
                                {/*begin::Item*/}
                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                  <Link to="/dashboard" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" >
                                    <span className="nav-icon py-2 w-auto">
                                      <span className="svg-icon svg-icon-3x">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                            <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                                          </g>
                                        </svg>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </span>
                                    <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>Dashboard</h3></span>
                                  </Link>
                                </li>

                              </ul>
                              {/*end::Nav Tabs*/}
                              {/*begin::Nav Content*/}
                              <div className="tab-content m-0 p-0">
                                <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel" />
                              </div>
                              {/*end::Nav Content*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*begin::Nav Panel Widget 1*/}
                        </div>
                      </div>
                    )}
                    {/* project Manager */}
                    {showProjectManager && (

                      <div class="row">
                        <div className="col-xl-12">
                          {/*begin::Nav Panel Widget 1*/}
                          <div className="card card-custom gutter-b">
                            {/*begin::Body*/}
                            <div className="card-body">
                              {/*begin::Nav Tabs*/}
                              <ul className="dashboard-tabs nav nav-pills nav-success row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
                                {/*begin::Item*/}
                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                  <Link to="/dashboard" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" >
                                    <span className="nav-icon py-2 w-auto">
                                      <span className="svg-icon svg-icon-3x">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                            <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                                          </g>
                                        </svg>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </span>
                                    <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>Dashboard</h3></span>
                                  </Link>
                                </li>

                              </ul>
                              {/*end::Nav Tabs*/}
                              {/*begin::Nav Content*/}
                              <div className="tab-content m-0 p-0">
                                <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel" />
                              </div>
                              {/*end::Nav Content*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*begin::Nav Panel Widget 1*/}
                        </div>
                      </div>

                    )}
                    {/* Task Manager */}
                    {showTaskManager && (


                      <div class="row">
                        <div className="col-xl-12">
                          {/*begin::Nav Panel Widget 1*/}
                          <div className="card card-custom gutter-b">
                            {/*begin::Body*/}
                            <div className="card-body">
                              {/*begin::Nav Tabs*/}
                              <ul className="dashboard-tabs nav nav-pills nav-success row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
                                {/*begin::Item*/}
                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                  <Link to="/dashboard" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" >
                                    <span className="nav-icon py-2 w-auto">
                                      <span className="svg-icon svg-icon-3x">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                            <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                                          </g>
                                        </svg>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </span>
                                    <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>Dashboard</h3></span>
                                  </Link>
                                </li>

                              </ul>
                              {/*end::Nav Tabs*/}
                              {/*begin::Nav Content*/}
                              <div className="tab-content m-0 p-0">
                                <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel" />
                                <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel" />
                              </div>
                              {/*end::Nav Content*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*begin::Nav Panel Widget 1*/}
                        </div>
                      </div>

                    )}

                    {/*begin::Row*/}
                    {this.state.myloading ? (
                      <>
                        <center><Spinner animation="border" variant="primary" /></center>
                      </>
                    ) : (
                      <div className="row" >
                        {this.state.allProzz.map(project => (
                          <div className="col-xl-4">
                            {/*begin::Card*/}
                            <div className="card card-custom gutter-b card-stretch">
                              {/*begin::Body*/}
                              <div className="card-body"   >
                                {/*begin::Info*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Pic*/}
                                  <div className="flex-shrink-0 mr-4 symbol symbol-60 symbol-circle">
                                  </div>
                                  {/*end::Pic*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-column mr-auto">
                                    {/*begin: Title*/}
                                    <div className="d-flex flex-column mr-auto">
                                      <Link to="/EditProject" onClick={this.EditProject.bind(this, project)} className="text-dark text-hover-primary font-size-h4 font-weight-bolder mb-1">{project.title}</Link>
                                      <span className="text-muted font-weight-bold">{project.location}</span>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::Info*/}
                                {/*begin::Description*/}
                                <div className="mb-10 mt-5 font-weight-bold">{project.description}</div>
                                {/*end::Description*/}
                                {/*begin::Data*/}
                                <div className="d-flex mb-5">
                                  <div className="d-flex align-items-center mr-7">
                                    <span className="font-weight-bold mr-4">Start</span>
                                    <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">{project.start_date}</span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bold mr-4">Due</span>
                                    <span className="btn btn-light-success btn-sm font-weight-bold btn-upper btn-text">{project.due_date}</span>
                                  </div>
                                </div>
                                {/*end::Data*/}
                                {/*begin::Progress*/}
                                <div className="d-flex mb-5 align-items-cente">
                                  <span className="d-block font-weight-bold mr-5">Progress</span>
                                  <div className="d-flex flex-row-fluid align-items-center">
                                    <div className="progress progress-xs mt-2 mb-2 w-100">
                                      <div className="progress-bar bg-success" role="progressbar" style={{ width: `${project.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="ml-3 font-weight-bolder">{project.progress} </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="font-weight-bold mr-12">Status</span>
                                  <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">{project.status}</span>
                                </div>
                              </div>

                              <div className="d-flex">

                                <p>
                                  <div className="d-flex mr-7">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <Link to="/EditProject"
                                      className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4"
                                      onClick={this.EditProject.bind(this, project)}
                                    >Edit Project</Link>
                                  </div>
                                </p>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <p>
                                  <div className="d-flex  mr-7">
                                    <Link
                                      className="btn btn-block btn-sm btn-light-danger font-weight-bolder text-uppercase py-4"
                                      onClick={this.DeleteProject.bind(this, project)}
                                      disabled={this.state.loading}
                                    >
                                      {this.state.loading && (
                                        <center><Spinner animation="border" variant="white" /></center>
                                      )}
                                Delete Project


                              </Link>

                                  </div>
                                </p>
                              </div>
                              {/*end::Body*/}
                            </div>
                          </div>
                        ))}
                        {/*end::Col*/}
                      </div>
                    )}
                    {/*end::Container*/}
                  </div>
                  {/*end::Entry*/}
                </div>
                {/*end::Content*/}
                <Footer />
              </div>

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