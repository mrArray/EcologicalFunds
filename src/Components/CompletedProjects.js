import React, { Component, useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Menu_Aside from "./Menu_Aside";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import AuthLogin from "../Authentications/AuthLogin";




export default class CompletedProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      myloading: true,
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
    axios.get("https://ecological.chinikiguard.com/projects/api/list/?all_record=1&for_user=true&status=completed",
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
          localStorage.setItem("AllTasksDataStatusCompleted", JSON.stringify(res.data));
        }
        // (res);
        // (res.data);
        this.setState({ allTazz: res.data, myloading: false });
      })

  }
  //this is my onclick event to pass project ID
  EditTask(task) {
    localStorage.setItem("singleTask", JSON.stringify(task));
    // (task)
  }
  render() {
    if (!localStorage.getItem('user')) {

      return (<Redirect to={'/login'} />)
    }

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

                        {this.state.allTazz.map(task => (
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            {/*begin::Card*/}
                            <div className="card card-custom gutter-b card-stretch">
                              {/*begin::Body*/}
                              <div className="card-body pt-4">

                                {/*begin::User*/}
                                <div className="d-flex align-items-center mb-7">
                                  {/*begin::Pic*/}
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                    </div>
                                  </div>
                                  {/*end::Pic*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <Link to="/EditTask" onClick={this.EditTask.bind(this, task)} className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{task.title}</Link>
                                    <span className="text-muted font-weight-bold">{task.project_name}</span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Desc*/}
                                <p className="mb-7">{task.description}</p>
                                <p className="text-muted font-weight-bold">{task.location}</p>
                                <div className="d-flex mb-5 align-items-cente">
                                  <span className="d-block font-weight-bold mr-5">Progress</span>
                                  <div className="d-flex flex-row-fluid align-items-center">
                                    <div className="progress progress-xs mt-2 mb-2 w-100">
                                      <div className="progress-bar bg-success" role="progressbar" style={{ width: `${task.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="ml-3 font-weight-bolder">{task.progress} </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="font-weight-bold mr-12">Status</span>
                                  <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">{task.status}</span>
                                </div>

                                {/*end::Desc*/}
                                {/*begin::Info*/}
                                <div className="mb-7">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Assigned To:</span>
                                    <a href="#" className="text-muted text-hover-primary">{task.assigned_to_name}</a>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Due Date::</span>
                                    <a href="#" className="text-muted text-hover-primary">{task.start_date}</a>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
                                    <span className="text-muted font-weight-bold">{task.due_date}</span>
                                  </div>
                                </div>



                                {/*end::Info*/}
                                <Link to="/EditTask"
                                  className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4"
                                  onClick={this.EditTask.bind(this, task)}
                                >Edit Task</Link>
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end:: Card*/}
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