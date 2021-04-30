import React, { Component, useState, useEffect } from "react";
import { Redirect, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import AuthLogin from "../Authentications/AuthLogin";



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdministrator: false,
      showTaskManager: false,
      showProjectManager: false,
      currentUser: undefined,
      myloading: true
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
    //API display for Dashboard
    const mytoken = AuthLogin.getCurrentUser();
    const token = mytoken.token;

    const DashboardUrl = 'https://ecological.chinikiguard.com/projects/api/dashboard/'
    axios.all([
      axios.get(DashboardUrl, {

        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
          'Access-Control-Allow-Credentials': true

        },
      }),

    ])
      .then(axios.spread((...responses) => {
        // output of req.
        // console.log(responses)
        const allTasks = responses[0].data.all_tasks;
        const allprojects = responses[0].data.all_projects;
        const openProjects = responses[0].data.open_projects;
        const openTasks = responses[0].data.open_tasks;
        const ongoingProjects = responses[0].data.inprogress_projects;
        const ongoingTasks = responses[0].data.inprogress_tasks;
        const completedProjects = responses[0].data.completed_projects;
        const completedTasks = responses[0].data.completed_tasks;
        // adding the data to the state methods      
        this.setState({
          allTask: allTasks,
          allproject: allprojects,
          openProject: openProjects,
          openTask: openTasks,
          ongoingProject: ongoingProjects,
          ongoingTask: ongoingTasks,
          completedProject: completedProjects,
          completedTask: completedTasks,
          myloading: false

        });


      }));

    //For User Counts

    const DashboardUrlUsers = 'https://ecological.chinikiguard.com/projects/api/user-dashboard/'
    axios.all([
      axios.get(DashboardUrlUsers, {

        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
          'Access-Control-Allow-Credentials': true

        },
      }),

    ])
      .then(axios.spread((...responses) => {
        // output of req.
        // console.log(responses)
        const allTasksuser = responses[0].data.all_tasks;
        const allprojectsuser = responses[0].data.all_projects;
        const openProjectsuser = responses[0].data.open_projects;
        const openTasksuser = responses[0].data.open_tasks;
        const ongoingProjectsuser = responses[0].data.inprogress_projects;
        const ongoingTasksuser = responses[0].data.inprogress_tasks;
        const completedProjectsuser = responses[0].data.completed_projects;
        const completedTasksuser = responses[0].data.completed_tasks;
        // adding the data to the state methods      
        this.setState({
          allTaskuser: allTasksuser,
          allprojectuser: allprojectsuser,
          openProjectuser: openProjectsuser,
          openTaskuser: openTasksuser,
          ongoingProjectuser: ongoingProjectsuser,
          ongoingTaskuser: ongoingTasksuser,
          completedProjectuser: completedProjectsuser,
          completedTaskuser: completedTasksuser,
          myloading: false

        });


      }));
  }


  logOut() {
    AuthLogin.logout();
  }


  render() {
    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }
    const { currentUser, showAdministrator, showTaskManager, showProjectManager } = this.state;

    return (
      <Switch>
        {currentUser && (

          <div>
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
                      {/* <Menu_Aside /> */}
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
                                      <Link to="/allprojects" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" id="#status">
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
                                        <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>All Project</h3></span>
                                      </Link>
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                      <Link to="/registerProject" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
                                        <span className="nav-icon py-2 w-auto">
                                          <span className="svg-icon svg-icon-3x">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                                                <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Add Project</h3></span>
                                      </Link>
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}

                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                      <Link to="/alltasks" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
                                        <span className="nav-icon py-2 w-auto">
                                          <span className="svg-icon svg-icon-3x">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                                                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>All Task</h3></span>
                                      </Link>
                                    </li>
                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                      <Link to="/AssignTask" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
                                        <span className="nav-icon py-2 w-auto">
                                          <span className="svg-icon svg-icon-3x">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                                                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                                              </g>
                                            </svg>

                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Assign Task</h3></span>
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
                        {showAdministrator && (

                          <div className="row">

                            <div className="col-xl-2">
                              <div className="card card-custom bg-green card-stretch gutter-b">

                                <div className="card-body">

                                  {this.state.myloading ? (
                                    <center><Spinner animation="border" variant="primary" /></center>

                                  ) : (
                                    <div>
                                      <span className="svg-icon svg-icon-2x svg-icon-success">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-opened.svg*/}
                                        <center>
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                        </center>
                                        {/*end::Svg Icon*/}
                                      </span>

                                      <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">


                                        <h1>{this.state.allproject}</h1>

                                      </span>

                                      </center>

                                      <center><span className="font-weight-bold text font-size-sm">Total Projects</span></center>
                                    </div>
                                  )}

                                </div>


                              </div>

                            </div>
                            <div className="col-xl-2">

                              {/*begin::Stats Widget 26*/}
                              <div className="card card-custom bg-green card-stretch gutter-b">
                                {/*begin::ody*/}
                                <div className="card-body">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <span className="svg-icon svg-icon-2x svg-icon-success">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}
                                        <center>
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                        </center>
                                        {/*end::Svg Icon*/}
                                      </span>
                                      <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{this.state.allTask}</h1></span></center>
                                      <center><span className="font-weight-bold text font-size-sm">Total Tasks</span></center>
                                    </div>

                                  )}
                                </div>

                                {/*end::Body*/}
                              </div>
                              {/*end::Stats Widget 26*/}
                            </div>
                            <div className="col-xl-2">
                              {/*begin::Stats Widget 27*/}
                              <div className="card card-custom bg-green card-stretch gutter-b">
                                {/*begin::Body*/}
                                <div className="card-body">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <span className="svg-icon svg-icon-2x svg-icon-warning">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                        <center>
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                        </center>
                                        {/*end::Svg Icon*/}
                                      </span>
                                      <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{this.state.openProject}</h1></span></center>
                                      <center><span className="font-weight-bold text font-size-sm">New Projects</span></center>
                                    </div>
                                  )}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Stats Widget 27*/}
                            </div>

                            <div className="col-xl-2">
                              {/*begin::Stats Widget 27*/}
                              <div className="card card-custom bg-green card-stretch gutter-b">
                                {/*begin::Body*/}
                                <div className="card-body">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <span className="svg-icon svg-icon-2x svg-icon-warning">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                        <center>
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                        </center>
                                        {/*end::Svg Icon*/}
                                      </span>
                                      <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{this.state.openTask}</h1></span></center>
                                      <center><span className="font-weight-bold text font-size-sm">New Tasks</span></center>
                                    </div>
                                  )}
                                  {/*end::Body*/}
                                </div>
                              </div>
                              {/*end::Stats Widget 27*/}
                            </div>
                            <div className="col-xl-2">
                              {/*begin::Stats Widget 27*/}
                              <div className="card card-custom bg-green card-stretch gutter-b">
                                {/*begin::Body*/}
                                <div className="card-body">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <span className="svg-icon svg-icon-2x svg-icon-danger">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                        <center>
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                        </center>
                                        {/*end::Svg Icon*/}
                                      </span>
                                      <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{this.state.ongoingProject}</h1></span></center>
                                      <center><span className="font-weight-bold text font-size-sm">Ongoing Projects</span></center>
                                    </div>
                                  )}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Stats Widget 27*/}
                            </div>


                            <div className="col-xl-2">
                              {/*begin::Stats Widget 28*/}
                              <div className="card card-custom bg-green card-stretch gutter-b">
                                {/*begin::Body*/}
                                <div className="card-body">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <span className="svg-icon svg-icon-2x svg-icon-danger">
                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
                                        <center>
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                        </center>
                                        {/*end::Svg Icon*/}
                                      </span>
                                      <center> <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"><h1>{this.state.ongoingTask}</h1></span></center>
                                      <center><span className="font-weight-bold text font-size-sm">Ongoing Tasks</span></center>
                                    </div>
                                  )}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Stat: Widget 28*/}
                            </div>
                          </div>
                        )}
                        {showAdministrator && (

                          <div className="row">
                            <div className="col-xl-6">
                              {/*begin::Stats Widget 22*/}
                              <div className="card card-custom bgi-no-repeat card-stretch gutter-b" style={{ backgroundPosition: 'right top', backgroundSize: '30% auto', backgroundImage: 'url(assets/media/svg/shapes/abstract-3.svg)' }}>
                                {/*begin::Body*/}
                                <div className="card-body my-4">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <a href="#" className="card-title font-weight-bolder text-info font-size-h6 mb-4 text-hover-state-dark d-block">Completed Projects</a>
                                      <div className="font-weight-bold text-muted font-size-sm">
                                        <span className="text-dark-75 font-weight-bolder font-size-h2 mr-2">{this.state.completedProject}</span></div>
                                      <div className="progress progress-xs mt-7 bg-info-o-60">
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '100%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Stats Widget 22*/}
                            </div>
                            <div className="col-xl-6">
                              {/*begin::Stats Widget 22*/}
                              <div className="card card-custom bgi-no-repeat card-stretch gutter-b" style={{ backgroundPosition: 'right top', backgroundSize: '30% auto', backgroundImage: 'url(assets/media/svg/shapes/abstract-3.svg)' }}>
                                {/*begin::Body*/}
                                <div className="card-body my-4">
                                  {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                      <a href="#" className="card-title font-weight-bolder text-success font-size-h6 mb-4 text-hover-state-dark d-block">Completed Tasks</a>
                                      <div className="font-weight-bold text-muted font-size-sm">
                                        <span className="text-dark-75 font-weight-bolder font-size-h2 mr-2">{this.state.completedTask}</span></div>
                                      <div className="progress progress-xs mt-7 bg-success-o-60">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Stats Widget 22*/}
                            </div>
                          </div>
                        )}

                        {/* project manager  start*/}
                        {showProjectManager && (

                          <div class="row">
                            <div className="col-xl-12">
                              {/*begin::Nav Panel Widget 1*/}
                              <div className="card card-custom gutter-b">
                                {/*begin::Body*/}
                                <div className="card-body">
                                  {/*begin::Nav Tabs*/}
                                  <ul className="dashboard-tabs nav nav-pills nav-primary row row-paddingless m-0 p-0 flex-column flex-sm-row" role="tablist">
                                    {/*begin::Item*/}
                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <Link to="/allprojects" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_1">
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
                                        <span className="nav-text font-size-lg py-2 font-weight-bold text-center"><h3>All Project</h3></span>
                                      </Link>
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <Link to="/registerProject"className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
                                        <span className="nav-icon py-2 w-auto">
                                          <span className="svg-icon svg-icon-3x">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                                                <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Add Project</h3></span>
                                      </Link>
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}

                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <Link to="/alltasks"className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
                                        <span className="nav-icon py-2 w-auto">
                                          <span className="svg-icon svg-icon-3x">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                                                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                                              </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>All Task</h3></span>
                                      </Link>
                                    </li>
                                    <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <Link to="/assignTask" className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center" data-toggle="pill" href="#tab_forms_widget_2">
                                        <span className="nav-icon py-2 w-auto">
                                          <span className="svg-icon svg-icon-3x">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                                                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
                                              </g>
                                            </svg>

                                            {/*end::Svg Icon*/}
                                          </span>
                                        </span>
                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center"><h3>Assign Task</h3></span>
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
                        {showProjectManager && (

                          <div className="row">
                            <div className="col-xl-12">
                              {/*begin::Mixed Widget 1*/}
                              <div className="card card-custom bg-gray-100 gutter-b card-stretch">
                                {/*begin::Header*/}
                                <div className="card-header border-0 bg-primary py-5">
                                  <h3 className="card-title font-weight-bolder text-white">Project Info</h3>

                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body p-0 position-relative overflow-hidden">
                                  {/*begin::Chart*/}
                                  <div id="kt_mixed_widget_1_chart" className="card-rounded-bottom bg-primary" style={{ height: 200 }} />
                                  {/*end::Chart*/}
                                  {/*begin::Stats*/}

                                  
                                  <div className="card-spacer mt-n25">
                                    {/*begin::Row*/}
                                  
                                   
                                    <div className="row m-0">
                                    
                                    
                                      <div className="col bg-light-primary px-6 py-8 rounded-xl mr-7 mb-7">
                                        <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                                          
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/allprojects"  className="text-primary font-weight-bold font-size-h6"><h1>Total Projects</h1></Link>
                                        <Link  to="/allprojects" className="text-black font-weight-bold font-size-h6"><h1>{this.state.allprojectuser}</h1></Link>
                                  </div>
                                  )}
                                      </div>

                                   
                                      <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                                        <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <polygon points="0 0 24 0 24 24 0 24" />
                                              <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                              <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/allTasks" className="text-primary font-weight-bold font-size-h6 mt-2"><h1>Total Tasks</h1></Link>
                                        <Link  to="/allTasks" className="text-black font-weight-bold font-size-h6"><h1>{this.state.allTaskuser}</h1></Link>
                                       
                                        </div>
                                  )}
                                      </div>
                                </div>

                                    
                                    {/*end::Row*/}
                                  
                                    {/*begin::Row*/}
                                    
                                    <div className="row m-0">
                                   
                                      <div className="col bg-light-success px-6 py-8 rounded-xl mr-7">
                                      
                                        <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <polygon points="0 0 24 0 24 24 0 24" />
                                              <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                                              <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/CompletedProjects"  className="text-success font-weight-bold font-size-h6 mt-2"><h1>Completed Projects</h1></Link>
                                        <Link  to="/CompletedProjects" className="text-black font-weight-bold font-size-h6"><h1>{this.state.completedProjectuser}</h1></Link>
                                      </div>
                                  )}
                                    </div>
                                 
                                      <div className="col bg-light-success px-6 py-8 rounded-xl">
                                        <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Urgent-mail.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" fill="#000000" opacity="0.3" />
                                              <path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" fill="#000000" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/CompletedTask" className="text-success font-weight-bold font-size-h6 mt-2"><h1>Completed Tasks</h1></Link>
                                        
                                      <Link  to="/CompletedTask" className="text-black font-weight-bold font-size-h6"><h1>{this.state.completedTaskuser}</h1></Link>
                                      </div>

                                        )}

                                        </div>
                                        
                                      
                                  
                                  </div>


                                    {/*end::Row*/}

                                    {/*end::Row*/}
                                  </div>
                                  {/*end::Stats*/}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Mixed Widget 1*/}
                            </div>
                          </div>
                        )}
                        {/* project manager end */}
                        
                        {showTaskManager && (

                          <div className="row">
                            <div className="col-xl-12">
                              {/*begin::Mixed Widget 1*/}
                              <div className="card card-custom bg-gray-100 gutter-b card-stretch">
                                {/*begin::Header*/}
                                <div className="card-header border-0 bg-danger py-5">
                                  <h3 className="card-title font-weight-bolder text-white">Task Info</h3>

                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body p-0 position-relative overflow-hidden">
                                  {/*begin::Chart*/}
                                  <div id="kt_mixed_widget_1_chart" className="card-rounded-bottom bg-danger" style={{ height: 200 }} />
                                  {/*end::Chart*/}
                                  {/*begin::Stats*/}
                                  <div className="card-spacer mt-n25">
                                    {/*begin::Row*/}
                                    <div className="row m-0">
                                      <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                                        <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link  to="/Alltasks" className="text-warning font-weight-bold font-size-h6"><h1>Total Tasks</h1></Link>
                                        <Link  to="/Alltasks" className="text-warning font-weight-bold font-size-h6"><h1>{this.state.allTaskuser}</h1></Link>
</div>
                                  )}
                                      </div>
                                      <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                                        <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/OpenTask" className="text-primary font-weight-bold font-size-h6 mt-2"><h1>New Task</h1></Link>
                                        <Link  to="/OpenTask" className="text-primary font-weight-bold font-size-h6"><h1>{this.state.openTaskuser}</h1></Link>
                                    </div>
                                  )}
                                      </div>
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    <div className="row m-0">
                                      <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                                        <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/OngoingTask" className="text-danger font-weight-bold font-size-h6 mt-2"><h1>Ongiong Tasks</h1></Link>
                                        <Link  to="/OngoingTask" className="text-danger font-weight-bold font-size-h6"><h1>{this.state.ongoingTaskuser}</h1></Link>
                                    </div>
                                  )}
                                      </div>
                                      <div className="col bg-light-success px-6 py-8 rounded-xl">
                                        <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                          {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Urgent-mail.svg*/}
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                              <rect x={0} y={0} width={24} height={24} />
                                              <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                                              <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                                              <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                                              <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                                            </g>
                                          </svg>
                                          {/*end::Svg Icon*/}
                                        </span>
                                        {this.state.myloading ? (
                                    <>
                                      <center><Spinner animation="border" variant="primary" /></center>
                                    </>

                                  ) : (
                                    <div>
                                        <Link to="/CompletedTask" className="text-success font-weight-bold font-size-h6 mt-2"><h1>Completed Task</h1></Link>
                                        <Link  to="/OngoingTask" className="text-success font-weight-bold font-size-h6"><h1>{this.state.completedTaskuser}</h1></Link>
                                      </div>
                                  )}
                                      </div>
                                  
                                    </div>
                                    {/*end::Row*/}
                                  </div>
                                  {/*end::Stats*/}
                                </div>
                                {/*end::Body*/}
                              </div>
                              {/*end::Mixed Widget 1*/}
                            </div>
                          </div>
                        )}
                      </div>

                    </div>

                  </div>

                </div>
              </div>
              {/*end::Content*/}

            </div>
            <Footer />
          </div>
        )}
      </Switch>

    );
  }
}