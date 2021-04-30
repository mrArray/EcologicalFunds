import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, Redirect, Switch } from 'react-router-dom';
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

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.handleStatus = this.handleStatus.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);


        this.state = {
            status: "",
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
    }
    
    refreshPage() {
        window.location.reload();
    }


    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }
    ChangeStatus(status) {
        let username = 'admin';
        let password = 'Pass@1234';
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        const singleProjects = JSON.parse(localStorage.getItem('singleProjects'))
        const ProjectPk = singleProjects.pk;
        // console.log(ProjectPk)

        return axios.put(`https://ecological.chinikiguard.com/projects/api/update/${ProjectPk}/`, {
            status: `${status}`,
        },
            {
                headers: {
                    'Authorization': `Basic ${token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
                    'Access-Control-Allow-Credentials': true
                },
            }
        )
            .then(res => {
                if (res.data) {
                    localStorage.setItem("singleProjects", JSON.stringify(singleProjects));
                    // localStorage.setItem("status", JSON.stringify(singleProjects));
                }
                // console.log(res);
                // console.log(res.data.status);
                window.location = "/allprojects"

            })
    }
    handleStatus(e) {
        e.preventDefault();



        this.setState({
            message: "",
            successful: false,
            loading: true

        });

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            this.ChangeStatus(
                this.state.status
            ).then(
                response => {
                    this.setState({
                        message: response.data.detail,
                        successful: true,
                        loading: true
                    });

                    window.location = "/EditProject"
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
                        loading: true
                    });
                }
            );
        }


    }
    render() {

        if (!localStorage.getItem('user')) {

            return (<Redirect to={'/login'} />)
          }
        const singleProjects = JSON.parse(localStorage.getItem('singleProjects'))
        // const statuss = JSON.parse(localStorage.getItem('status'))
        // console.log(singleProjects)
        const AllProjectsTasks = JSON.parse(localStorage.getItem('AllProjectsTasks'))

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
                                    <Link  class="btn btn-light-primary font-weight-bolder btn-sm" to="/allprojects" >Back</Link>

                                        <div className="card card-custom gutter-b">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    {/*begin: Pic*/}
                                                    <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                                        <div className="symbol symbol-50 symbol-lg-120">
                                                            {/* <img alt="Pic" src="assets/media/project-logos/3.png" /> */}
                                                        </div>
                                                        <div className="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                                                            {/* <span className="font-size-h3 symbol-label font-weight-boldest">JM</span> */}
                                                        </div>
                                                    </div>
                                                    {/*end: Pic*/}
                                                    {/*begin: Info*/}
                                                    <div className="flex-grow-1">
                                                        {/*begin: Title*/}
                                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                            <div className="mr-3">
                                                                {/*begin::Name*/}
                                                                <a href="#" className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">{singleProjects.title}
                                                                    <i className="flaticon2-correct text-success icon-md ml-2" /></a>
                                                                {/*end::Name*/}
                                                                {/*begin::Contacts*/}
                                                                <div className="d-flex flex-wrap my-2">

                                                                    <a href="#" className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Lock.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <mask fill="white">
                                                                                        <use xlinkHref="#path-1" />
                                                                                    </mask>
                                                                                    <g />
                                                                                    <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>{singleProjects.manager}</a>
                                                                    <a href="#" className="text-muted text-hover-primary font-weight-bold">
                                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Map/Marker2.svg*/}
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg>
                                                                            {/*end::Svg Icon*/}
                                                                        </span>{singleProjects.location}</a>
                                                                </div>
                                                                {/*end::Contacts*/}
                                                            </div>
                                                            <div className="my-lg-0 my-1">
                                                                {/* <a href="#" className="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3">Reports</a> */}

                                                                <a href="#" className="btn btn-sm btn-light-success  font-weight-bolder text-uppercase">{singleProjects.status}</a>
                                                            </div>
                                                        </div>
                                                        {/*end: Title*/}
                                                        {/*begin: Content*/}
                                                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                            <div className="flex-grow-1 font-weight-bold text-dark-50 py-5 py-lg-2 mr-5">{singleProjects.description}</div>
                                                            <div className="d-flex flex-wrap align-items-center py-2">
                                                                <div className="d-flex align-items-center mr-10">
                                                                    <div className="mr-6">
                                                                        <div className="font-weight-bold mb-2">Start Date</div>
                                                                        <span className="btn btn-sm btn-text btn-light-primary text-uppercase font-weight-bold">{singleProjects.start_date}</span>
                                                                    </div>
                                                                    <div className>
                                                                        <div className="font-weight-bold mb-2">Due Date</div>
                                                                        <span className="btn btn-sm btn-text btn-light-danger text-uppercase font-weight-bold">{singleProjects.due_date}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 flex-shrink-0 w-150px w-xl-300px mt-4 mt-sm-0">
                                                                    <span className="font-weight-bold">Progress</span>
                                                                    <div className="progress progress-xs mt-2 mb-2">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${singleProjects.progress}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <span className="font-weight-bolder text-dark">{singleProjects.progress}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*end: Content*/}
                                                    </div>
                                                    {/*end: Info*/}
                                                </div>
                                                <Form onSubmit={this.handleStatus} ref={c => { this.form = c; }} className="form" id="kt_form">
                                                    {!this.state.successful && (
                                                        <div>
                                                            <div className="separator separator-solid my-7" />
                                                            <div className="form-group">
                                                                <label><h5>Change Status</h5></label>
                                                                <select name="country" className="form-control"
                                                                    value={this.state.status}
                                                                    onChange={this.onChangeStatus}
                                                                    validations={[required]}
                                                                    name="projectstatus"
                                                                >
                                                                    <option value>Select</option>
                                                                    <option value="open">Open</option>
                                                                    <option value="inprogress">In Progress</option>
                                                                    <option value="completed">Completed</option>
                                                                </select>
                                                            </div>
                                                            <center>
                                                                <button id="kt_login_singin_form_submit_button"
                                                                    className="btn btn-sm btn-primary font-weight-bolder text-uppercase"
                                                                    // data-wizard-type="step-content"
                                                                    enabled={this.state.loading}
                                                                >
                                                                    {this.state.loading && (
                                                                        <center><Spinner animation="border" variant="white" /></center>
                                                                    )}
                                                                    <span>Change</span>
                                                                </button></center>
                                                            <CheckButton
                                                                style={{ display: "none" }}
                                                                ref={c => {
                                                                    this.checkBtn = c;
                                                                }}
                                                            />
                                                        </div>
                                                    )}
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
                                                    )}
                                                </Form>

                                            </div>

                                        </div>

                                        <div className="card card-custom card-stretch gutter-b">
                                            {/*begin::Header*/}
                                            <div className="card-header border-0 py-5">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label font-weight-bolder text-dark">Task</span>
                                                    <span className="text-muted mt-3 font-weight-bold font-size-sm">List of all task under this Project</span>
                                                </h3>
                                                <div className="card-toolbar">
                                                    {/* <a href="#" className="btn btn-info font-weight-bolder font-size-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-white"> */}
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg*/}
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                                    <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                    <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                                                </g>
                                                            </svg> */}
                                                    {/*end::Svg Icon*/}
                                                    {/* </span>Add New Task</a> */}
                                                </div>
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="card-body pt-0 pb-3">
                                                {/*begin::Table*/}
                                                <div className="table-responsive">

                                                    <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                                                        <thead>
                                                            <tr className="text-uppercase">
                                                                <th style={{ minWidth: 250 }} className="pl-7">
                                                                    <span className="">Tasks</span>
                                                                </th>
                                                                <th style={{ minWidth: 100 }}>Assigned to</th>
                                                                <th style={{ minWidth: 100 }}>Start Date</th>
                                                                <th style={{ minWidth: 150 }}>Due Date</th>
                                                                <th style={{ minWidth: 130 }}>status</th>
                                                                <th style={{ minWidth: 120 }} />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {AllProjectsTasks.map(Tasks => (

                                                                <tr>

                                                                    <td className="pl-0 py-8">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="symbol symbol-50 flex-shrink-0 mr-4">
                                                                                <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-26.jpg")' }} />
                                                                            </div>
                                                                            <div>
                                                                                <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{Tasks.title}</a>
                                                                                <span className="text-muted font-weight-bold d-block">{Tasks.location}</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{Tasks.assigned_to_name}</span>
                                                                        {/* <span className="text-muted font-weight-bold">Insurance</span> */}
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{Tasks.start_date}</span>
                                                                        {/* <span className="text-muted font-weight-bold">Paid</span> */}
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{Tasks.due_date}</span>
                                                                        {/* <span className="text-muted font-weight-bold">Paid</span> */}
                                                                    </td>

                                                                    <td>
                                                                        <span className="label label-lg label-light-primary label-inline">{Tasks.status}</span>
                                                                    </td>
                                                                    <td className="text-right pr-0">
                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mr-3">
                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Bookmark.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                        <path d="M8,4 L16,4 C17.1045695,4 18,4.8954305 18,6 L18,17.726765 C18,18.2790497 17.5522847,18.726765 17,18.726765 C16.7498083,18.726765 16.5087052,18.6329798 16.3242754,18.4639191 L12.6757246,15.1194142 C12.2934034,14.7689531 11.7065966,14.7689531 11.3242754,15.1194142 L7.67572463,18.4639191 C7.26860564,18.8371115 6.63603827,18.8096086 6.26284586,18.4024896 C6.09378519,18.2180598 6,17.9769566 6,17.726765 L6,6 C6,4.8954305 6.8954305,4 8,4 Z" fill="#000000" />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
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
                                                                        </a>
                                                                    </td>

                                                                </tr>
                                                            ))}


                                                        </tbody>
                                                    </table>

                                                </div>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Body*/}
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


















