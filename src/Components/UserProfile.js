import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
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

export default class UserProfile extends Component {

    constructor(props) {
        super(props);
        // this.handleRegisterTask = this.handleRegisterTask.bind(this);
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeStatus = this.onChangeStatus.bind(this)
        // this.onChangeLocation = this.onChangeLocation.bind(this)
        // this.onChangeStartDate = this.onChangeStartDate.bind(this)
        // this.onChangeDueDate = this.onChangeDueDate.bind(this)
        // this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this)
        // this.onChangeProject = this.onChangeProject.bind(this)


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
        if (!localStorage.getItem('user')) {

            return (<Redirect to={'/login'} />)
          }
        const script = document.createElement("script");

        script.src = "./assets/dist/assets/js/pages/widgets.js";
        script.src = "./assets/dist/assets/js/pages/custom/profile/profile.js";
        script.async = true;

        document.body.appendChild(script);


    }
    //   componentWillMount() {


    //     const username = 'admin'
    //     const password = 'Pass@1234'
    //     const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    //     axios.get("https://ecological.chinikiguard.com/projects/api/list/?all_record=1",
    //       {
    //         headers:
    //         {
    //           'Authorization': `Basic ${token}`,
    //           'Access-Control-Allow-Origin': '*',
    //           'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
    //           'Access-Control-Allow-Credentials': true
    //         },

    //       })
    //       .then(res => {
    //         if (res.data) {
    //           localStorage.setItem("AllProjectData", JSON.stringify(res.data));



    //         }
    //         console.log(res);
    //         console.log(res.data);
    //         // window.location = "/dashboard"
    //       })

    //   }


    //   onChangeProject(e) {
    //     this.setState({
    //       project: e.target.value
    //     });
    //   }
    //   onChangeTitle(e) {
    //     this.setState({
    //       title: e.target.value
    //     });
    //   }

    //   onChangeDescription(e) {
    //     this.setState({
    //       description: e.target.value
    //     });
    //   }

    //   onChangeStatus(e) {
    //     this.setState({
    //       status: e.target.value
    //     });
    //   }
    //   onChangeLocation(e) {
    //     this.setState({
    //       location: e.target.value
    //     });
    //   }
    //   onChangeStartDate(e) {
    //     this.setState({
    //       start_date: e.target.value
    //     });
    //   }
    //   onChangeDueDate(e) {
    //     this.setState({
    //       due_date: e.target.value
    //     });
    //   }

    //   onChangeAssignedTo(e) {
    //     this.setState({
    //       assigned_to: e.target.value
    //     });
    //   }

    //   handleRegisterTask(e) {
    //     e.preventDefault();

    //     this.setState({
    //       message: "",
    //       successful: false,
    //       loading:true
    //     });

    //     this.form.validateAll();

    //     if (this.checkBtn.context._errors.length === 0) {
    //       AuthLogin.RegisterTask(
    //         this.state.project,
    //         this.state.title,
    //         this.state.description,
    //         this.state.location,
    //         this.state.status,
    //         this.state.start_date,
    //         this.state.due_date,
    //         this.state.assigned_to
    //       ).then(
    //         response => {
    //           this.setState({
    //             message: response.data.detail,
    //             successful: true
    //           });
    //           window.location = "/Alltasks"
    //         },
    //         error => {
    //           const resMessage =
    //             (error.response &&
    //               error.response.data &&
    //               error.response.data.message) ||
    //             error.message ||
    //             error.toString();

    //           this.setState({
    //             successful: false,
    //             message: resMessage,
    //             loading: false
    //           });
    //         }
    //       );
    //     }
    //}

    render() {

        if (!localStorage.getItem('user')) {

            return (<Redirect to={'/login'} />)
          }

        const { loading } = this.state;

        return (
            <div>

                <Header />




                <div>

                    {/*end::Header Mobile*/}
                    <div className="d-flex flex-column flex-root">
                        {/*begin::Page*/}
                        <div className="d-flex flex-row flex-column-fluid page">
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

                                {/*begin::Content*/}
                                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                    {/*begin::Subheader*/}
                                    <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
                                        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                            {/*begin::Info*/}
                                            <div className="d-flex align-items-center flex-wrap mr-1">
                                                {/*begin::Mobile Toggle*/}
                                                <button className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none" id="kt_subheader_mobile_toggle">
                                                    <span />
                                                </button>
                                                {/*end::Mobile Toggle*/}

                                            </div>
                                            {/*end::Info*/}

                                        </div>
                                    </div>
                                    {/*end::Subheader*/}
                                    {/*begin::Entry*/}
                                    <div className="d-flex flex-column-fluid">
                                        {/*begin::Container*/}
                                        <div className="container">
                                            {/*begin::Profile Overview*/}
                                            <div className="d-flex flex-row">
                                                {/*begin::Aside*/}
                                                <div className="flex-row-auto offcanvas-mobile w-300px w-xl-350px" id="kt_profile_aside">
                                                    {/*begin::Profile Card*/}
                                                    <div className="card card-custom card-stretch">
                                                        {/*begin::Body*/}
                                                        <div className="card-body pt-4">
                                                            {/*begin::Toolbar*/}
                                                            <div className="d-flex justify-content-end">
                                                                <div className="dropdown dropdown-inline">
                                                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ki ki-bold-more-hor" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                                                        {/*begin::Navigation*/}
                                                                        <ul className="navi navi-hover py-5">
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-drop" />
                                                                                    </span>
                                                                                    <span className="navi-text">New Group</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-list-3" />
                                                                                    </span>
                                                                                    <span className="navi-text">Contacts</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-rocket-1" />
                                                                                    </span>
                                                                                    <span className="navi-text">Groups</span>
                                                                                    <span className="navi-link-badge">
                                                                                        <span className="label label-light-primary label-inline font-weight-bold">new</span>
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-bell-2" />
                                                                                    </span>
                                                                                    <span className="navi-text">Calls</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-gear" />
                                                                                    </span>
                                                                                    <span className="navi-text">Settings</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="navi-separator my-3" />
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-magnifier-tool" />
                                                                                    </span>
                                                                                    <span className="navi-text">Help</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="navi-item">
                                                                                <a href="#" className="navi-link">
                                                                                    <span className="navi-icon">
                                                                                        <i className="flaticon2-bell-2" />
                                                                                    </span>
                                                                                    <span className="navi-text">Privacy</span>
                                                                                    <span className="navi-link-badge">
                                                                                        <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        {/*end::Navigation*/}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*end::Toolbar*/}
                                                            {/*begin::User*/}
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                                                                    <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/users/300_21.jpg")' }} />
                                                                    <i className="symbol-badge bg-success" />
                                                                </div>
                                                                <div>
                                                                    <a href="#" className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
                                                                    <div className="text-muted">Application Developer</div>
                                                                    <div className="mt-2">
                                                                        <a href="#" className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Chat</a>
                                                                        <a href="#" className="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1">Follow</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*end::User*/}
                                                            {/*begin::Contact*/}
                                                            <div className="py-9">
                                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                                    <span className="font-weight-bold mr-2">Email:</span>
                                                                    <a href="#" className="text-muted text-hover-primary">matt@fifestudios.com</a>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                                    <span className="font-weight-bold mr-2">Phone:</span>
                                                                    <span className="text-muted">44(76)34254578</span>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <span className="font-weight-bold mr-2">Location:</span>
                                                                    <span className="text-muted">Melbourne</span>
                                                                </div>
                                                            </div>
                                                            {/*end::Contact*/}
                                                            {/*begin::Nav*/}
                                                            <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
                                                                <div className="navi-item mb-2">
                                                                    <a href="custom/apps/profile/profile-1/overview.html" className="navi-link py-4 active">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
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
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Profile Overview</span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="custom/apps/profile/profile-1/personal-information.html" className="navi-link py-4">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                                                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Personal Information</span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="custom/apps/profile/profile-1/account-information.html" className="navi-link py-4">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Compiling.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                        <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
                                                                                        <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Account Information</span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="custom/apps/profile/profile-1/change-password.html" className="navi-link py-4">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Shield-user.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                        <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                                                                                        <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z" fill="#000000" opacity="0.3" />
                                                                                        <path d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" fill="#000000" opacity="0.3" />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Change Passwort</span>
                                                                        <span className="navi-label">
                                                                            <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="custom/apps/profile/profile-1/email-settings.html" className="navi-link py-4">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-opened.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                        <path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z" fill="#000000" opacity="0.3" />
                                                                                        <path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" fill="#000000" />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Email settings</span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="#" className="navi-link py-4" data-toggle="tooltip" title="Coming soon..." data-placement="right">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-top-panel-6.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                        <rect fill="#000000" x={2} y={5} width={19} height={4} rx={1} />
                                                                                        <rect fill="#000000" opacity="0.3" x={2} y={11} width={19} height={10} rx={1} />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Saved Credit Cards</span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="#" className="navi-link py-4" data-toggle="tooltip" title="Coming soon..." data-placement="right">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Files/File.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                                                        <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                        <rect fill="#000000" x={6} y={11} width={9} height={2} rx={1} />
                                                                                        <rect fill="#000000" x={6} y={15} width={5} height={2} rx={1} />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text font-size-lg">Tax information</span>
                                                                        <span className="navi-label">
                                                                            <span className="label label-light-primary label-inline font-weight-bold">new</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="navi-item mb-2">
                                                                    <a href="#" className="navi-link py-4" data-toggle="tooltip" title="Coming soon..." data-placement="right">
                                                                        <span className="navi-icon mr-2">
                                                                            <span className="svg-icon">
                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Article.svg*/}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                        <rect fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                                                                                        <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
                                                                                    </g>
                                                                                </svg>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </span>
                                                                        <span className="navi-text">Statements</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            {/*end::Nav*/}
                                                        </div>
                                                        {/*end::Body*/}
                                                    </div>
                                                    {/*end::Profile Card*/}
                                                </div>
                                                {/*end::Aside*/}
                                                {/*begin::Content*/}
                                                <div className="flex-row-fluid ml-lg-8">
                                                    {/*begin::Row*/}
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            {/*begin::List Widget 14*/}
                                                            <div className="card card-custom card-stretch gutter-b">
                                                                {/*begin::Header*/}
                                                                <div className="card-header border-0">
                                                                    <h3 className="card-title font-weight-bolder text-dark">Market Leaders</h3>
                                                                    <div className="card-toolbar">
                                                                        <div className="dropdown dropdown-inline">
                                                                            <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ki ki-bold-more-ver" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                                                                {/*begin::Navigation*/}
                                                                                <ul className="navi navi-hover">
                                                                                    <li className="navi-header font-weight-bold py-4">
                                                                                        <span className="font-size-lg">Choose Label:</span>
                                                                                        <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                                                                    </li>
                                                                                    <li className="navi-separator mb-3 opacity-70" />
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-text">
                                                                                                <span className="label label-xl label-inline label-light-success">Customer</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-text">
                                                                                                <span className="label label-xl label-inline label-light-danger">Partner</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-text">
                                                                                                <span className="label label-xl label-inline label-light-warning">Suplier</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-text">
                                                                                                <span className="label label-xl label-inline label-light-primary">Member</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-text">
                                                                                                <span className="label label-xl label-inline label-light-dark">Staff</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-separator mt-3 opacity-70" />
                                                                                    <li className="navi-footer py-4">
                                                                                        <a className="btn btn-clean font-weight-bold btn-sm" href="#">
                                                                                            <i className="ki ki-plus icon-sm" />Add new</a>
                                                                                    </li>
                                                                                </ul>
                                                                                {/*end::Navigation*/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Header*/}
                                                                {/*begin::Body*/}
                                                                <div className="card-body pt-2">
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex flex-wrap align-items-center mb-10">
                                                                        {/*begin::Symbol*/}
                                                                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-17.jpg")' }} />
                                                                        </div>
                                                                        {/*end::Symbol*/}
                                                                        {/*begin::Title*/}
                                                                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">Cup &amp; Green</a>
                                                                            <span className="text-muted font-weight-bold font-size-sm my-1">Local, clean &amp; environmental</span>
                                                                            <span className="text-muted font-weight-bold font-size-sm">Created by:
                               <span className="text-primary font-weight-bold">CoreAd</span></span>
                                                                        </div>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="d-flex align-items-center py-lg-0 py-2">
                                                                            <div className="d-flex flex-column text-right">
                                                                                <span className="text-dark-75 font-weight-bolder font-size-h4">24,900</span>
                                                                                <span className="text-muted font-size-sm font-weight-bolder">votes</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                    {/*begin: Item*/}
                                                                    <div className="d-flex flex-wrap align-items-center mb-10">
                                                                        {/*begin::Symbol*/}
                                                                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-10.jpg")' }} />
                                                                        </div>
                                                                        {/*end::Symbol*/}
                                                                        {/*begin::Title*/}
                                                                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">Yellow Background</a>
                                                                            <span className="text-muted font-weight-bold font-size-sm my-1">Strong abstract concept</span>
                                                                            <span className="text-muted font-weight-bold font-size-sm">Created by:
                               <span className="text-primary font-weight-bold">KeenThemes</span></span>
                                                                        </div>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="d-flex align-items-center py-lg-0 py-2">
                                                                            <div className="d-flex flex-column text-right">
                                                                                <span className="text-dark-75 font-weight-bolder font-size-h4">70,380</span>
                                                                                <span className="text-muted font-weight-bolder font-size-sm">votes</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end: Item*/}
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex flex-wrap align-items-center mb-10">
                                                                        {/*begin::Symbol*/}
                                                                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-1.jpg")' }} />
                                                                        </div>
                                                                        {/*end::Symbol*/}
                                                                        {/*begin::Title*/}
                                                                        <div className="d-flex flex-column flex-grow-1 pr-3">
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">Nike &amp; Blue</a>
                                                                            <span className="text-muted font-weight-bold font-size-sm my-1">Footwear overalls</span>
                                                                            <span className="text-muted font-weight-bold font-size-sm">Created by:
                               <span className="text-primary font-weight-bold">Invision Inc.</span></span>
                                                                        </div>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="d-flex align-items-center py-lg-0 py-2">
                                                                            <div className="d-flex flex-column text-right">
                                                                                <span className="text-dark-75 font-size-h4 font-weight-bolder">7,200</span>
                                                                                <span className="text-muted font-size-sm font-weight-bolder">votes</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex flex-wrap align-items-center mb-10">
                                                                        {/*begin::Symbol*/}
                                                                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-9.jpg")' }} />
                                                                        </div>
                                                                        {/*end::Symbol*/}
                                                                        {/*begin::Title*/}
                                                                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">Desserts platter</a>
                                                                            <span className="text-muted font-size-sm font-weight-bold my-1">Food trends &amp; reviews</span>
                                                                            <span className="text-muted font-size-sm font-weight-bold">Created by:
                               <span className="text-primary font-weight-bold">Figma Studio</span></span>
                                                                        </div>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="d-flex align-items-center py-lg-0 py-2">
                                                                            <div className="d-flex flex-column text-right">
                                                                                <span className="text-dark-75 font-size-h4 font-weight-bolder">36,450</span>
                                                                                <span className="text-muted font-size-sm font-weight-bolder">votes</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                    {/*begin::Item*/}
                                                                    <div className="d-flex flex-wrap align-items-center">
                                                                        {/*begin::Symbol*/}
                                                                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                                                                            <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/stock-600x400/img-12.jpg")' }} />
                                                                        </div>
                                                                        {/*end::Symbol*/}
                                                                        {/*begin::Title*/}
                                                                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                                                            <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">Cup &amp; Green</a>
                                                                            <span className="text-muted font-weight-bold font-size-sm my-1">Local, clean &amp; environmental</span>
                                                                            <span className="text-muted font-weight-bold font-size-sm">Created by:
                               <span className="text-primary font-weight-bold">CoreAd</span></span>
                                                                        </div>
                                                                        {/*end::Title*/}
                                                                        {/*begin::Info*/}
                                                                        <div className="d-flex align-items-center py-lg-0 py-2">
                                                                            <div className="d-flex flex-column text-right">
                                                                                <span className="text-dark-75 font-weight-bolder font-size-h4">23,900</span>
                                                                                <span className="text-muted font-size-sm font-weight-bolder">votes</span>
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Info*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                </div>
                                                                {/*end::Body*/}
                                                            </div>
                                                            {/*end::List Widget 14*/}
                                                        </div>
                                                        <div className="col-lg-6">
                                                            {/*begin::List Widget 10*/}
                                                            <div className="card card-custom card-stretch gutter-b">
                                                                {/*begin::Header*/}
                                                                <div className="card-header border-0">
                                                                    <h3 className="card-title font-weight-bolder text-dark">Notifications</h3>
                                                                    <div className="card-toolbar">
                                                                        <div className="dropdown dropdown-inline">
                                                                            <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ki ki-bold-more-ver" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                                                                {/*begin::Naviigation*/}
                                                                                <ul className="navi">
                                                                                    <li className="navi-header font-weight-bold py-5">
                                                                                        <span className="font-size-lg">Add New:</span>
                                                                                        <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                                                                    </li>
                                                                                    <li className="navi-separator mb-3 opacity-70" />
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="flaticon2-shopping-cart-1" />
                                                                                            </span>
                                                                                            <span className="navi-text">Order</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="navi-icon flaticon2-calendar-8" />
                                                                                            </span>
                                                                                            <span className="navi-text">Members</span>
                                                                                            <span className="navi-label">
                                                                                                <span className="label label-light-danger label-rounded font-weight-bold">3</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="navi-icon flaticon2-telegram-logo" />
                                                                                            </span>
                                                                                            <span className="navi-text">Project</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-item">
                                                                                        <a href="#" className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="navi-icon flaticon2-new-email" />
                                                                                            </span>
                                                                                            <span className="navi-text">Record</span>
                                                                                            <span className="navi-label">
                                                                                                <span className="label label-light-success label-rounded font-weight-bold">5</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="navi-separator mt-3 opacity-70" />
                                                                                    <li className="navi-footer pt-5 pb-4">
                                                                                        <a className="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                                                                                        <a className="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                                                                    </li>
                                                                                </ul>
                                                                                {/*end::Naviigation*/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Header*/}
                                                                {/*begin::Body*/}
                                                                <div className="card-body pt-0">
                                                                    {/*begin::Item*/}
                                                                    <div className="mb-6">
                                                                        {/*begin::Content*/}
                                                                        <div className="d-flex align-items-center flex-grow-1">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                                                                                <input type="checkbox" defaultValue={1} />
                                                                                <span />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Section*/}
                                                                            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                                                {/*begin::Info*/}
                                                                                <div className="d-flex flex-column align-items-cente py-2 w-75">
                                                                                    {/*begin::Title*/}
                                                                                    <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Daily Standup Meeting</a>
                                                                                    {/*end::Title*/}
                                                                                    {/*begin::Data*/}
                                                                                    <span className="text-muted font-weight-bold">Due in 2 Days</span>
                                                                                    {/*end::Data*/}
                                                                                </div>
                                                                                {/*end::Info*/}
                                                                                {/*begin::Label*/}
                                                                                <span className="label label-lg label-light-primary label-inline font-weight-bold py-4">Approved</span>
                                                                                {/*end::Label*/}
                                                                            </div>
                                                                            {/*end::Section*/}
                                                                        </div>
                                                                        {/*end::Content*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                    {/*begin::Item*/}
                                                                    <div className="mb-6">
                                                                        {/*begin::Content*/}
                                                                        <div className="d-flex align-items-center flex-grow-1">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                                                                                <input type="checkbox" defaultValue={1} />
                                                                                <span />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Section*/}
                                                                            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                                                {/*begin::Info*/}
                                                                                <div className="d-flex flex-column align-items-cente py-2 w-75">
                                                                                    {/*begin::Title*/}
                                                                                    <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Group Town Hall Meet-up with showcase</a>
                                                                                    {/*end::Title*/}
                                                                                    {/*begin::Data*/}
                                                                                    <span className="text-muted font-weight-bold">Due in 2 Days</span>
                                                                                    {/*end::Data*/}
                                                                                </div>
                                                                                {/*end::Info*/}
                                                                                {/*begin::Label*/}
                                                                                <span className="label label-lg label-light-warning label-inline font-weight-bold py-4">In Progress</span>
                                                                                {/*end::Label*/}
                                                                            </div>
                                                                            {/*end::Section*/}
                                                                        </div>
                                                                        {/*end::Content*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                    {/*begin::Item*/}
                                                                    <div className="mb-6">
                                                                        {/*begin::Content*/}
                                                                        <div className="d-flex align-items-center flex-grow-1">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                                                                                <input type="checkbox" defaultValue={1} />
                                                                                <span />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Section*/}
                                                                            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                                                {/*begin::Info*/}
                                                                                <div className="d-flex flex-column align-items-cente py-2 w-75">
                                                                                    {/*begin::Title*/}
                                                                                    <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Next sprint planning and estimations</a>
                                                                                    {/*end::Title*/}
                                                                                    {/*begin::Data*/}
                                                                                    <span className="text-muted font-weight-bold">Due in 2 Days</span>
                                                                                    {/*end::Data*/}
                                                                                </div>
                                                                                {/*end::Info*/}
                                                                                {/*begin::Label*/}
                                                                                <span className="label label-lg label-light-success label-inline font-weight-bold py-4">Success</span>
                                                                                {/*end::Label*/}
                                                                            </div>
                                                                            {/*end::Section*/}
                                                                        </div>
                                                                        {/*end::Content*/}
                                                                    </div>
                                                                    {/*end::Item*/}
                                                                    {/*begin::Item*/}
                                                                    <div className="mb-6">
                                                                        {/*begin::Content*/}
                                                                        <div className="d-flex align-items-center flex-grow-1">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                                                                                <input type="checkbox" defaultValue={1} />
                                                                                <span />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Section*/}
                                                                            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                                                {/*begin::Info*/}
                                                                                <div className="d-flex flex-column align-items-cente py-2 w-75">
                                                                                    {/*begin::Title*/}
                                                                                    <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Sprint delivery and project deployment</a>
                                                                                    {/*end::Title*/}
                                                                                    {/*begin::Data*/}
                                                                                    <span className="text-muted font-weight-bold">Due in 2 Days</span>
                                                                                    {/*end::Data*/}
                                                                                </div>
                                                                                {/*end::Info*/}
                                                                                {/*begin::Label*/}
                                                                                <span className="label label-lg label-light-danger label-inline font-weight-bold py-4">Rejected</span>
                                                                                {/*end::Label*/}
                                                                            </div>
                                                                            {/*end::Section*/}
                                                                        </div>
                                                                        {/*end::Content*/}
                                                                    </div>
                                                                    {/*end: Item*/}
                                                                    {/*begin: Item*/}
                                                                    <div className>
                                                                        {/*begin::Content*/}
                                                                        <div className="d-flex align-items-center flex-grow-1">
                                                                            {/*begin::Checkbox*/}
                                                                            <label className="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                                                                                <input type="checkbox" defaultValue={1} />
                                                                                <span />
                                                                            </label>
                                                                            {/*end::Checkbox*/}
                                                                            {/*begin::Section*/}
                                                                            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                                                {/*begin::Info*/}
                                                                                <div className="d-flex flex-column align-items-cente py-2 w-75">
                                                                                    {/*begin::Title*/}
                                                                                    <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Data analytics research showcase</a>
                                                                                    {/*end::Title*/}
                                                                                    {/*begin::Data*/}
                                                                                    <span className="text-muted font-weight-bold">Due in 2 Days</span>
                                                                                    {/*end::Data*/}
                                                                                </div>
                                                                                {/*end::Info*/}
                                                                                {/*begin::Label*/}
                                                                                <span className="label label-lg label-light-warning label-inline font-weight-bold py-4">In Progress</span>
                                                                                {/*end::Label*/}
                                                                            </div>
                                                                            {/*end::Section*/}
                                                                        </div>
                                                                        {/*end::Content*/}
                                                                    </div>
                                                                    {/*end: Item*/}
                                                                </div>
                                                                {/*end: Card Body*/}
                                                            </div>
                                                            {/*end: Card*/}
                                                            {/*end: List Widget 10*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Row*/}
                                                    {/*begin::Advance Table: Widget 7*/}
                                                    <div className="card card-custom gutter-b">
                                                        {/*begin::Header*/}
                                                        <div className="card-header border-0 pt-5">
                                                            <h3 className="card-title align-items-start flex-column">
                                                                <span className="card-label font-weight-bolder text-dark">New Arrivals</span>
                                                                <span className="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span>
                                                            </h3>
                                                            <div className="card-toolbar">
                                                                <ul className="nav nav-pills nav-pills-sm nav-dark-75">
                                                                    <li className="nav-item">
                                                                        <a className="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_12_1">Month</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_12_2">Week</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link py-2 px-4 active" data-toggle="tab" href="#kt_tab_pane_12_3">Day</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        {/*end::Header*/}
                                                        {/*begin::Body*/}
                                                        <div className="card-body pt-2 pb-0 mt-n3">
                                                            <div className="tab-content mt-5" id="myTabTables12">
                                                                {/*begin::Tap pane*/}
                                                                <div className="tab-pane fade" id="kt_tab_pane_12_1" role="tabpanel" aria-labelledby="kt_tab_pane_12_1">
                                                                    {/*begin::Table*/}
                                                                    <div className="table-responsive">
                                                                        <table className="table table-borderless table-vertical-center">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="p-0 w-50px" />
                                                                                    <th className="p-0 min-w-200px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-160px" />
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Beats Studio</a>
                                                                                        <span className="text-muted font-weight-bold d-block">FTP: bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right pr-0">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$57,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">AngularJS, C#</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-danger label-inline">Rejected</span>
                                                                                    </td>
                                                                                    <td className="pr-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">KTR Application</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$45,200,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">ReactJS, Ruby</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant Outstanding</a>
                                                                                        <div>
                                                                                            <span className="font-weight-bolder">Email:</span>
                                                                                            <a className="text-muted font-weight-bold text-hover-primary" href="#">bprow@bnc.cc</a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$2,000,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">ReactJs, HTML</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-primary label-inline">Approved</span>
                                                                                    </td>
                                                                                    <td className="pr-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Telegram Mobile</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$4,600,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">Python, MySQL</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Cisco Management</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$560,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">Laravel, Metronic</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-success label-inline">Success</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    {/*end::Table*/}
                                                                </div>
                                                                {/*end::Tap pane*/}
                                                                {/*begin::Tap pane*/}
                                                                <div className="tab-pane fade" id="kt_tab_pane_12_2" role="tabpanel" aria-labelledby="kt_tab_pane_12_2">
                                                                    {/*begin::Table*/}
                                                                    <div className="table-responsive">
                                                                        <table className="table table-borderless table-vertical-center">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="p-0 w-50px" />
                                                                                    <th className="p-0 min-w-200px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-160px" />
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Telegram Mobile</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$4,600,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">Python, MySQL</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Cisco Management</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$560,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">Laravel, Metronic</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-success label-inline">Success</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Beats Studio</a>
                                                                                        <span className="text-muted font-weight-bold d-block">FTP: bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right pr-0">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$57,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">AngularJS, C#</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-danger label-inline">Rejected</span>
                                                                                    </td>
                                                                                    <td className="pr-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant Outstanding</a>
                                                                                        <div>
                                                                                            <span className="font-weight-bolder">Email:</span>
                                                                                            <a className="text-muted font-weight-bold text-hover-primary" href="#">bprow@bnc.cc</a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$2,000,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">ReactJs, HTML</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-primary label-inline">Approved</span>
                                                                                    </td>
                                                                                    <td className="pr-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">KTR Application</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$45,200,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">ReactJS, Ruby</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    {/*end::Table*/}
                                                                </div>
                                                                {/*end::Tap pane*/}
                                                                {/*begin::Tap pane*/}
                                                                <div className="tab-pane fade show active" id="kt_tab_pane_12_3" role="tabpanel" aria-labelledby="kt_tab_pane_12_3">
                                                                    {/*begin::Table*/}
                                                                    <div className="table-responsive">
                                                                        <table className="table table-borderless table-vertical-center">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="p-0 w-50px" />
                                                                                    <th className="p-0 min-w-200px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-120px" />
                                                                                    <th className="p-0 min-w-160px" />
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant Outstanding</a>
                                                                                        <div>
                                                                                            <span className="font-weight-bolder">Email:</span>
                                                                                            <a className="text-muted font-weight-bold text-hover-primary" href="#">bprow@bnc.cc</a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$2,000,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">ReactJs, HTML</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-primary label-inline">Approved</span>
                                                                                    </td>
                                                                                    <td className="pr-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Telegram Mobile</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$4,600,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">Python, MySQL</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Cisco Management</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$560,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">Laravel, Metronic</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-success label-inline">Success</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Beats Studio</a>
                                                                                        <span className="text-muted font-weight-bold d-block">FTP: bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right pr-0">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$57,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">AngularJS, C#</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-danger label-inline">Rejected</span>
                                                                                    </td>
                                                                                    <td className="pr-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="p-0 py-4">
                                                                                        <div className="symbol symbol-50 symbol-light mr-5">
                                                                                            <span className="symbol-label">
                                                                                                <img src="assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt />
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="pl-0">
                                                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">KTR Application</a>
                                                                                        <span className="text-muted font-weight-bold d-block">
                                                                                            <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$45,200,000</span>
                                                                                        <span className="text-muted font-weight-bold">Paid</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="text-muted font-weight-bold">ReactJS, Ruby</span>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <span className="label label-lg label-light-warning label-inline">In Progress</span>
                                                                                    </td>
                                                                                    <td className="p-0 text-right">
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                                                                                                        <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                                                                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                        <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                                                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                                        <rect x={0} y={0} width={24} height={24} />
                                                                                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                                    </g>
                                                                                                </svg>
                                                                                                {/*end::Svg Icon*/}
                                                                                            </span>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    {/*end::Table*/}
                                                                </div>
                                                                {/*end::Tap pane*/}
                                                            </div>
                                                        </div>
                                                        {/*end::Body*/}
                                                    </div>
                                                    {/*end::Advance Table Widget 7*/}
                                                </div>
                                                {/*end::Content*/}
                                            </div>
                                            {/*end::Profile Overview*/}
                                        </div>
                                        {/*end::Container*/}
                                    </div>
                                    {/*end::Entry*/}
                                </div>
                                {/*end::Content*/}

                            </div>
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Page*/}
                    </div>
                    {/*end::Main*/}
                    {/* begin::User Panel*/}
                    <div id="kt_quick_user" className="offcanvas offcanvas-right p-10">
                        {/*begin::Header*/}
                        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
                            <h3 className="font-weight-bold m-0">User Profile
       <small className="text-muted font-size-sm ml-2">12 messages</small></h3>
                            <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
                                <i className="ki ki-close icon-xs text-muted" />
                            </a>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Content*/}
                        <div className="offcanvas-content pr-5 mr-n5">
                            {/*begin::Header*/}
                            <div className="d-flex align-items-center mt-5">
                                <div className="symbol symbol-100 mr-5">
                                    <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/users/300_21.jpg")' }} />
                                    <i className="symbol-badge bg-success" />
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
                                    <div className="text-muted mt-1">Application Developer</div>
                                    <div className="navi mt-2">
                                        <a href="#" className="navi-item">
                                            <span className="navi-link p-0 pb-2">
                                                <span className="navi-icon mr-1">
                                                    <span className="svg-icon svg-icon-lg svg-icon-primary">
                                                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg*/}
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                <rect x={0} y={0} width={24} height={24} />
                                                                <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000" />
                                                                <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                                                            </g>
                                                        </svg>
                                                        {/*end::Svg Icon*/}
                                                    </span>
                                                </span>
                                                <span className="navi-text text-muted text-hover-primary">jm@softplus.com</span>
                                            </span>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign Out</a>
                                    </div>
                                </div>
                            </div>
                            {/*end::Header*/}
                            {/*begin::Separator*/}
                            <div className="separator separator-dashed mt-8 mb-5" />
                            {/*end::Separator*/}
                            {/*begin::Nav*/}
                            <div className="navi navi-spacer-x-0 p-0">
                                {/*begin::Item*/}
                                <a href="custom/apps/user/profile-1/personal-information.html" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-success">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Notification2.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <path d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z" fill="#000000" />
                                                            <circle fill="#000000" opacity="0.3" cx="18.5" cy="5.5" r="2.5" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">My Profile</div>
                                            <div className="text-muted">Account settings and more
               <span className="label label-light-danger label-inline font-weight-bold">update</span></div>
                                        </div>
                                    </div>
                                </a>
                                {/*end:Item*/}
                                {/*begin::Item*/}
                                <a href="custom/apps/user/profile-3.html" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-warning">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Chart-bar1.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <rect fill="#000000" opacity="0.3" x={12} y={4} width={3} height={13} rx="1.5" />
                                                            <rect fill="#000000" opacity="0.3" x={7} y={9} width={3} height={8} rx="1.5" />
                                                            <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fillRule="nonzero" />
                                                            <rect fill="#000000" opacity="0.3" x={17} y={11} width={3} height={6} rx="1.5" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">My Messages</div>
                                            <div className="text-muted">Inbox and tasks</div>
                                        </div>
                                    </div>
                                </a>
                                {/*end:Item*/}
                                {/*begin::Item*/}
                                <a href="custom/apps/user/profile-2.html" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-danger">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Files/Selected-file.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <path d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                            <path d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z" fill="#000000" fillRule="nonzero" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">My Activities</div>
                                            <div className="text-muted">Logs and notifications</div>
                                        </div>
                                    </div>
                                </a>
                                {/*end:Item*/}
                                {/*begin::Item*/}
                                <a href="custom/apps/userprofile-1/overview.html" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-opened.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z" fill="#000000" opacity="0.3" />
                                                            <path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" fill="#000000" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">My Tasks</div>
                                            <div className="text-muted">latest tasks and projects</div>
                                        </div>
                                    </div>
                                </a>
                                {/*end:Item*/}
                            </div>
                            {/*end::Nav*/}
                            {/*begin::Separator*/}
                            <div className="separator separator-dashed my-7" />
                            {/*end::Separator*/}
                            {/*begin::Notifications*/}
                            <div>
                                {/*begin:Heading*/}
                                <h5 className="mb-5">Recent Notifications</h5>
                                {/*end:Heading*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">
                                    <span className="svg-icon svg-icon-warning mr-5">
                                        <span className="svg-icon svg-icon-lg">
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
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Another purpose persuade</a>
                                        <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-warning py-1 font-size-lg">+28%</span>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
                                    <span className="svg-icon svg-icon-success mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <rect x={0} y={0} width={24} height={24} />
                                                    <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                    <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Would be to people</a>
                                        <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-success py-1 font-size-lg">+50%</span>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
                                    <span className="svg-icon svg-icon-danger mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <rect x={0} y={0} width={24} height={24} />
                                                    <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
                                                    <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
                                                </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <a href="#" className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">Purpose would be to persuade</a>
                                        <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-danger py-1 font-size-lg">-27%</span>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center bg-light-info rounded p-5">
                                    <span className="svg-icon svg-icon-info mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Attachment2.svg*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <rect x={0} y={0} width={24} height={24} />
                                                    <path d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z" fill="#000000" opacity="0.3" transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)" />
                                                    <path d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z" fill="#000000" transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)" />
                                                    <path d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z" fill="#000000" opacity="0.3" transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)" />
                                                    <path d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z" fill="#000000" opacity="0.3" transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)" />
                                                </g>
                                            </svg>
                                            {/*end::Svg Icon*/}
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <a href="#" className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">The best product</a>
                                        <span className="text-muted font-size-sm">Due in 2 Days</span>
                                    </div>
                                    <span className="font-weight-bolder text-info py-1 font-size-lg">+8%</span>
                                </div>
                                {/*end::Item*/}
                            </div>
                            {/*end::Notifications*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/* end::User Panel*/}
                    {/*begin::Quick Cart*/}
                    <div id="kt_quick_cart" className="offcanvas offcanvas-right p-10">
                        {/*begin::Header*/}
                        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
                            <h4 className="font-weight-bold m-0">Shopping Cart</h4>
                            <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_cart_close">
                                <i className="ki ki-close icon-xs text-muted" />
                            </a>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Content*/}
                        <div className="offcanvas-content">
                            {/*begin::Wrapper*/}
                            <div className="offcanvas-wrapper mb-5 scroll-pull">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center justify-content-between py-8">
                                    <div className="d-flex flex-column mr-2">
                                        <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">iBlender</a>
                                        <span className="text-muted">The best kitchen gadget in 2020</span>
                                        <div className="d-flex align-items-center mt-2">
                                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 350</span>
                                            <span className="text-muted mr-1">for</span>
                                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">5</span>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                                <i className="ki ki-minus icon-xs" />
                                            </a>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <i className="ki ki-plus icon-xs" />
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="symbol symbol-70 flex-shrink-0">
                                        <img src="assets/media/stock-600x400/img-1.jpg" title alt />
                                    </a>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Separator*/}
                                <div className="separator separator-solid" />
                                {/*end::Separator*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center justify-content-between py-8">
                                    <div className="d-flex flex-column mr-2">
                                        <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">SmartCleaner</a>
                                        <span className="text-muted">Smart tool for cooking</span>
                                        <div className="d-flex align-items-center mt-2">
                                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                                            <span className="text-muted mr-1">for</span>
                                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">4</span>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                                <i className="ki ki-minus icon-xs" />
                                            </a>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <i className="ki ki-plus icon-xs" />
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="symbol symbol-70 flex-shrink-0">
                                        <img src="assets/media/stock-600x400/img-2.jpg" title alt />
                                    </a>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Separator*/}
                                <div className="separator separator-solid" />
                                {/*end::Separator*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center justify-content-between py-8">
                                    <div className="d-flex flex-column mr-2">
                                        <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">CameraMax</a>
                                        <span className="text-muted">Professional camera for edge cutting shots</span>
                                        <div className="d-flex align-items-center mt-2">
                                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 150</span>
                                            <span className="text-muted mr-1">for</span>
                                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">3</span>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                                <i className="ki ki-minus icon-xs" />
                                            </a>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <i className="ki ki-plus icon-xs" />
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="symbol symbol-70 flex-shrink-0">
                                        <img src="assets/media/stock-600x400/img-3.jpg" title alt />
                                    </a>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Separator*/}
                                <div className="separator separator-solid" />
                                {/*end::Separator*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center justify-content-between py-8">
                                    <div className="d-flex flex-column mr-2">
                                        <a href="#" className="font-weight-bold text-dark text-hover-primary">4D Printer</a>
                                        <span className="text-muted">Manufactoring unique objects</span>
                                        <div className="d-flex align-items-center mt-2">
                                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 1450</span>
                                            <span className="text-muted mr-1">for</span>
                                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                                <i className="ki ki-minus icon-xs" />
                                            </a>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <i className="ki ki-plus icon-xs" />
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="symbol symbol-70 flex-shrink-0">
                                        <img src="assets/media/stock-600x400/img-4.jpg" title alt />
                                    </a>
                                </div>
                                {/*end::Item*/}
                                {/*begin::Separator*/}
                                <div className="separator separator-solid" />
                                {/*end::Separator*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center justify-content-between py-8">
                                    <div className="d-flex flex-column mr-2">
                                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                                        <span className="text-muted">Perfect animation tool</span>
                                        <div className="d-flex align-items-center mt-2">
                                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                                            <span className="text-muted mr-1">for</span>
                                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                                <i className="ki ki-minus icon-xs" />
                                            </a>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <i className="ki ki-plus icon-xs" />
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="symbol symbol-70 flex-shrink-0">
                                        <img src="assets/media/stock-600x400/img-8.jpg" title alt />
                                    </a>
                                </div>
                                {/*end::Item*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Purchase*/}
                            <div className="offcanvas-footer">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <span className="font-weight-bold text-muted font-size-sm mr-2">Total</span>
                                    <span className="font-weight-bolder text-dark-50 text-right">$1840.00</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-7">
                                    <span className="font-weight-bold text-muted font-size-sm mr-2">Sub total</span>
                                    <span className="font-weight-bolder text-primary text-right">$5640.00</span>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-primary text-weight-bold">Place Order</button>
                                </div>
                            </div>
                            {/*end::Purchase*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Quick Cart*/}
                    {/*begin::Quick Panel*/}
                    <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
                        {/*begin::Header*/}
                        <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
                            <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#kt_quick_panel_logs">Audit Logs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#kt_quick_panel_notifications">Notifications</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#kt_quick_panel_settings">Settings</a>
                                </li>
                            </ul>
                            <div className="offcanvas-close mt-n1 pr-5">
                                <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_panel_close">
                                    <i className="ki ki-close icon-xs text-muted" />
                                </a>
                            </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Content*/}
                        <div className="offcanvas-content px-10">
                            <div className="tab-content">
                                {/*begin::Tabpane*/}
                                <div className="tab-pane fade show pt-3 pr-5 mr-n5 active" id="kt_quick_panel_logs" role="tabpanel">
                                    {/*begin::Section*/}
                                    <div className="mb-15">
                                        <h5 className="font-weight-bold mb-5">System Messages</h5>
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center flex-wrap mb-5">
                                            <div className="symbol symbol-50 symbol-light mr-5">
                                                <span className="symbol-label">
                                                    <img src="assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Top Authors</a>
                                                <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                            </div>
                                            <span className="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">+82$</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center flex-wrap mb-5">
                                            <div className="symbol symbol-50 symbol-light mr-5">
                                                <span className="symbol-label">
                                                    <img src="assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Popular Authors</a>
                                                <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                            </div>
                                            <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+280$</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center flex-wrap mb-5">
                                            <div className="symbol symbol-50 symbol-light mr-5">
                                                <span className="symbol-label">
                                                    <img src="assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">New Users</a>
                                                <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                            </div>
                                            <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center flex-wrap mb-5">
                                            <div className="symbol symbol-50 symbol-light mr-5">
                                                <span className="symbol-label">
                                                    <img src="assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Active Customers</a>
                                                <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                            </div>
                                            <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="symbol symbol-50 symbol-light mr-5">
                                                <span className="symbol-label">
                                                    <img src="assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Bestseller Theme</a>
                                                <span className="text-muted font-weight-bold">Most Successful Fellas</span>
                                            </div>
                                            <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                        </div>
                                        {/*end: Item*/}
                                    </div>
                                    {/*end::Section*/}
                                    {/*begin::Section*/}
                                    <div className="mb-5">
                                        <h5 className="font-weight-bold mb-5">Notifications</h5>
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                                            <span className="svg-icon svg-icon-warning mr-5">
                                                <span className="svg-icon svg-icon-lg">
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
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Another purpose persuade</a>
                                                <span className="text-muted font-size-sm">Due in 2 Days</span>
                                            </div>
                                            <span className="font-weight-bolder text-warning py-1 font-size-lg">+28%</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center bg-light-success rounded p-5 mb-5">
                                            <span className="svg-icon svg-icon-success mr-5">
                                                <span className="svg-icon svg-icon-lg">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                                                            <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </span>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Would be to people</a>
                                                <span className="text-muted font-size-sm">Due in 2 Days</span>
                                            </div>
                                            <span className="font-weight-bolder text-success py-1 font-size-lg">+50%</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-5">
                                            <span className="svg-icon svg-icon-danger mr-5">
                                                <span className="svg-icon svg-icon-lg">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
                                                            <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </span>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">Purpose would be to persuade</a>
                                                <span className="text-muted font-size-sm">Due in 2 Days</span>
                                            </div>
                                            <span className="font-weight-bolder text-danger py-1 font-size-lg">-27%</span>
                                        </div>
                                        {/*end: Item*/}
                                        {/*begin: Item*/}
                                        <div className="d-flex align-items-center bg-light-info rounded p-5">
                                            <span className="svg-icon svg-icon-info mr-5">
                                                <span className="svg-icon svg-icon-lg">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Attachment2.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <path d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z" fill="#000000" opacity="0.3" transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)" />
                                                            <path d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z" fill="#000000" transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)" />
                                                            <path d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z" fill="#000000" opacity="0.3" transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)" />
                                                            <path d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z" fill="#000000" opacity="0.3" transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)" />
                                                        </g>
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </span>
                                            <div className="d-flex flex-column flex-grow-1 mr-2">
                                                <a href="#" className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">The best product</a>
                                                <span className="text-muted font-size-sm">Due in 2 Days</span>
                                            </div>
                                            <span className="font-weight-bolder text-info py-1 font-size-lg">+8%</span>
                                        </div>
                                        {/*end: Item*/}
                                    </div>
                                    {/*end::Section*/}
                                </div>
                                {/*end::Tabpane*/}
                                {/*begin::Tabpane*/}
                                <div className="tab-pane fade pt-2 pr-5 mr-n5" id="kt_quick_panel_notifications" role="tabpanel">
                                    {/*begin::Nav*/}
                                    <div className="navi navi-icon-circle navi-spacer-x-0">
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-bell text-success icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">5 new user generated report</div>
                                                    <div className="text-muted">Reports based on sales</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon2-box text-danger icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">2 new items submited</div>
                                                    <div className="text-muted">by Grog John</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-psd text-primary icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">79 PSD files generated</div>
                                                    <div className="text-muted">Reports based on sales</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon2-supermarket text-warning icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">$2900 worth producucts sold</div>
                                                    <div className="text-muted">Total 234 items</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-paper-plane-1 text-success icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">4.5h-avarage response time</div>
                                                    <div className="text-muted">Fostest is Barry</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-safe-shield-protection text-danger icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">3 Defence alerts</div>
                                                    <div className="text-muted">40% less alerts thar last week</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-notepad text-primary icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">Avarage 4 blog posts per author</div>
                                                    <div className="text-muted">Most posted 12 time</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-users-1 text-warning icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">16 authors joined last week</div>
                                                    <div className="text-muted">9 photodrapehrs, 7 designer</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon2-box text-info icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">2 new items have been submited</div>
                                                    <div className="text-muted">by Grog John</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon2-download text-success icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">2.8 GB-total downloads size</div>
                                                    <div className="text-muted">Mostly PSD end AL concepts</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon2-supermarket text-danger icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">$2900 worth producucts sold</div>
                                                    <div className="text-muted">Total 234 items</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-bell text-primary icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">7 new user generated report</div>
                                                    <div className="text-muted">Reports based on sales</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <a href="#" className="navi-item">
                                            <div className="navi-link rounded">
                                                <div className="symbol symbol-50 mr-3">
                                                    <div className="symbol-label">
                                                        <i className="flaticon-paper-plane-1 text-success icon-lg" />
                                                    </div>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold font-size-lg">4.5h-avarage response time</div>
                                                    <div className="text-muted">Fostest is Barry</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/*end::Item*/}
                                    </div>
                                    {/*end::Nav*/}
                                </div>
                                {/*end::Tabpane*/}
                                {/*begin::Tabpane*/}
                                <div className="tab-pane fade pt-3 pr-5 mr-n5" id="kt_quick_panel_settings" role="tabpanel">
                                    <form className="form">
                                        {/*begin::Section*/}
                                        <div>
                                            <h5 className="font-weight-bold mb-3">Customer Care</h5>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Enable Notifications:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-success switch-sm">
                                                        <label>
                                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Enable Case Tracking:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-success switch-sm">
                                                        <label>
                                                            <input type="checkbox" name="quick_panel_notifications_2" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Support Portal:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-success switch-sm">
                                                        <label>
                                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end::Section*/}
                                        <div className="separator separator-dashed my-6" />
                                        {/*begin::Section*/}
                                        <div className="pt-2">
                                            <h5 className="font-weight-bold mb-3">Reports</h5>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Generate Reports:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-sm switch-danger">
                                                        <label>
                                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Enable Report Export:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-sm switch-danger">
                                                        <label>
                                                            <input type="checkbox" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Allow Data Collection:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-sm switch-danger">
                                                        <label>
                                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end::Section*/}
                                        <div className="separator separator-dashed my-6" />
                                        {/*begin::Section*/}
                                        <div className="pt-2">
                                            <h5 className="font-weight-bold mb-3">Memebers</h5>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Enable Member singup:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-sm switch-primary">
                                                        <label>
                                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Allow User Feedbacks:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-sm switch-primary">
                                                        <label>
                                                            <input type="checkbox" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row align-items-center">
                                                <label className="col-8 col-form-label">Enable Customer Portal:</label>
                                                <div className="col-4 d-flex justify-content-end">
                                                    <span className="switch switch-sm switch-primary">
                                                        <label>
                                                            <input type="checkbox" defaultChecked="checked" name="select" />
                                                            <span />
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end::Section*/}
                                    </form>
                                </div>
                                {/*end::Tabpane*/}
                            </div>
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Quick Panel*/}
                    {/*begin::Chat Panel*/}
                    <div className="modal modal-sticky modal-sticky-bottom-right" id="kt_chat_modal" role="dialog" data-backdrop="false">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                {/*begin::Card*/}
                                <div className="card card-custom">
                                    {/*begin::Header*/}
                                    <div className="card-header align-items-center px-4 py-3">
                                        <div className="text-left flex-grow-1">
                                            {/*begin::Dropdown Menu*/}
                                            <div className="dropdown dropdown-inline">
                                                <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="svg-icon svg-icon-lg">
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
                                                </button>
                                                <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                                                    {/*begin::Navigation*/}
                                                    <ul className="navi navi-hover py-5">
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-drop" />
                                                                </span>
                                                                <span className="navi-text">New Group</span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-list-3" />
                                                                </span>
                                                                <span className="navi-text">Contacts</span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-rocket-1" />
                                                                </span>
                                                                <span className="navi-text">Groups</span>
                                                                <span className="navi-link-badge">
                                                                    <span className="label label-light-primary label-inline font-weight-bold">new</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-bell-2" />
                                                                </span>
                                                                <span className="navi-text">Calls</span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-gear" />
                                                                </span>
                                                                <span className="navi-text">Settings</span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-separator my-3" />
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-magnifier-tool" />
                                                                </span>
                                                                <span className="navi-text">Help</span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-item">
                                                            <a href="#" className="navi-link">
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-bell-2" />
                                                                </span>
                                                                <span className="navi-text">Privacy</span>
                                                                <span className="navi-link-badge">
                                                                    <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    {/*end::Navigation*/}
                                                </div>
                                            </div>
                                            {/*end::Dropdown Menu*/}
                                        </div>
                                        <div className="text-center flex-grow-1">
                                            <div className="text-dark-75 font-weight-bold font-size-h5">Matt Pears</div>
                                            <div>
                                                <span className="label label-dot label-success" />
                                                <span className="font-weight-bold text-muted font-size-sm">Active</span>
                                            </div>
                                        </div>
                                        <div className="text-right flex-grow-1">
                                            <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-dismiss="modal">
                                                <i className="ki ki-close icon-1x" />
                                            </button>
                                        </div>
                                    </div>
                                    {/*end::Header*/}
                                    {/*begin::Body*/}
                                    <div className="card-body">
                                        {/*begin::Scroll*/}
                                        <div className="scroll scroll-pull" data-height={375} data-mobile-height={300}>
                                            {/*begin::Messages*/}
                                            <div className="messages">
                                                {/*begin::Message In*/}
                                                <div className="d-flex flex-column mb-5 align-items-start">
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-circle symbol-40 mr-3">
                                                            <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                                        </div>
                                                        <div>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                            <span className="text-muted font-size-sm">2 Hours</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">How likely are you to recommend our company to your friends and family?</div>
                                                </div>
                                                {/*end::Message In*/}
                                                {/*begin::Message Out*/}
                                                <div className="d-flex flex-column mb-5 align-items-end">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="text-muted font-size-sm">3 minutes</span>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                        </div>
                                                        <div className="symbol symbol-circle symbol-40 ml-3">
                                                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                                </div>
                                                {/*end::Message Out*/}
                                                {/*begin::Message In*/}
                                                <div className="d-flex flex-column mb-5 align-items-start">
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-circle symbol-40 mr-3">
                                                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                        </div>
                                                        <div>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                            <span className="text-muted font-size-sm">40 seconds</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Ok, Understood!</div>
                                                </div>
                                                {/*end::Message In*/}
                                                {/*begin::Message Out*/}
                                                <div className="d-flex flex-column mb-5 align-items-end">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="text-muted font-size-sm">Just now</span>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                        </div>
                                                        <div className="symbol symbol-circle symbol-40 ml-3">
                                                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">You’ll receive notifications for all issues, pull requests!</div>
                                                </div>
                                                {/*end::Message Out*/}
                                                {/*begin::Message In*/}
                                                <div className="d-flex flex-column mb-5 align-items-start">
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-circle symbol-40 mr-3">
                                                            <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                                        </div>
                                                        <div>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                            <span className="text-muted font-size-sm">40 seconds</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">You can unwatch this repository immediately by clicking here:
                   <a href="#">https://github.com</a></div>
                                                </div>
                                                {/*end::Message In*/}
                                                {/*begin::Message Out*/}
                                                <div className="d-flex flex-column mb-5 align-items-end">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="text-muted font-size-sm">Just now</span>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                        </div>
                                                        <div className="symbol symbol-circle symbol-40 ml-3">
                                                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed</div>
                                                </div>
                                                {/*end::Message Out*/}
                                                {/*begin::Message In*/}
                                                <div className="d-flex flex-column mb-5 align-items-start">
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-circle symbol-40 mr-3">
                                                            <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                                        </div>
                                                        <div>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                            <span className="text-muted font-size-sm">40 seconds</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Most purchased Business courses during this sale!</div>
                                                </div>
                                                {/*end::Message In*/}
                                                {/*begin::Message Out*/}
                                                <div className="d-flex flex-column mb-5 align-items-end">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="text-muted font-size-sm">Just now</span>
                                                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                        </div>
                                                        <div className="symbol symbol-circle symbol-40 ml-3">
                                                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                                                </div>
                                                {/*end::Message Out*/}
                                            </div>
                                            {/*end::Messages*/}
                                        </div>
                                        {/*end::Scroll*/}
                                    </div>
                                    {/*end::Body*/}
                                    {/*begin::Footer*/}
                                    <div className="card-footer align-items-center">
                                        {/*begin::Compose*/}
                                        <textarea className="form-control border-0 p-0" rows={2} placeholder="Type a message" defaultValue={""} />
                                        <div className="d-flex align-items-center justify-content-between mt-5">
                                            <div className="mr-3">
                                                <a href="#" className="btn btn-clean btn-icon btn-md mr-1">
                                                    <i className="flaticon2-photograph icon-lg" />
                                                </a>
                                                <a href="#" className="btn btn-clean btn-icon btn-md">
                                                    <i className="flaticon2-photo-camera icon-lg" />
                                                </a>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
                                            </div>
                                        </div>
                                        {/*begin::Compose*/}
                                    </div>
                                    {/*end::Footer*/}
                                </div>
                                {/*end::Card*/}
                            </div>
                        </div>
                    </div>
                    {/*end::Chat Panel*/}
                    {/*begin::Scrolltop*/}
                    <div id="kt_scrolltop" className="scrolltop">
                        <span className="svg-icon">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg*/}
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <rect fill="#000000" opacity="0.3" x={11} y={10} width={2} height={10} rx={1} />
                                    <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                                </g>
                            </svg>
                            {/*end::Svg Icon*/}
                        </span>
                    </div>
                    {/*end::Scrolltop*/}

                </div>


            </div>
        );
    }
}

