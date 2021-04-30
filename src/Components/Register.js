import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link, Switch, Redirect } from 'react-router-dom'
import AuthLogin from "../Authentications/AuthLogin";
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

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeLG = this.onChangeLG.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);



    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      address: "",
      lga: "",
      state: "",
      dob: "",
      email: "",
      phone_number: "",
      successful: false,
      message: ""
    };
  }


  componentDidMount() {
    if (localStorage.getItem('user')) {

      return (<Redirect to={'/dashboard'} />)
    }
    const script = document.createElement("script");

    script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-5.js";
    script.async = true;

    document.body.appendChild(script);
  }



  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeLG(e) {
    this.setState({
      lga: e.target.value
    });
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeDob(e) {
    this.setState({
      dob: e.target.value
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
      phone_number: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthLogin.createNewUser(
        this.state.username,
        this.state.password,
      this.state.first_name,
      this.state.last_name,
      this.state.address,
      this.state.lga,
      this.state.state,
      this.state.dob,
      this.state.email,
      this.state.phone_number,

      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
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
            message: resMessage
          });
        }
      );
    }
  }
  render() {

    const { loading } = this.state;

    // if (this.state.redirectToReferrer) {
    //     return (<Redirect to={'/dashboard'} />)
    // }

    // if (sessionStorage.getItem('token')) {
    //     return (<Redirect to={'/dashboard'} />)
    // }

    return (

      <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
        {/*begin::Subheader*/}
        <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
          <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            {/*begin::Info*/}
            <div className="d-flex align-items-center flex-wrap mr-1">
              {/*begin::Page Heading*/}
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                {/*begin::Page Title*/}
                {/* <h5 className="text-dark font-weight-bold my-1 mr-5">Wizard 5</h5> */}
                {/*end::Page Title*/}
                {/*begin::Breadcrumb*/}
                <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                  <li className="breadcrumb-item">
                    {/* <a href className="text-muted">Pages</a> */}
                  </li>
                  <li className="breadcrumb-item">
                    {/* <a href className="text-muted">Wizard 5</a> */}
                  </li>
                </ul>
                {/*end::Breadcrumb*/}
              </div>
              {/*end::Page Heading*/}
            </div>
            {/*end::Info*/}
            {/*begin::Toolbar*/}
            <div className="d-flex align-items-center">
              {/*begin::Actions*/}
              {/* <a href="#" className="btn btn-light-primary font-weight-bolder btn-sm">Actions</a> */}
              {/*end::Actions*/}

            </div>
            {/*end::Toolbar*/}
          </div>
        </div>
        {/*end::Subheader*/}
        {/*begin::Entry*/}
        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Card*/}
            <div className="card card-custom">
              {/*begin::Card Body*/}
              <div className="card-body p-0">
                {/*begin::Wizard 5*/}
                <div className="wizard wizard-5 d-flex flex-column flex-lg-row flex-row-fluid" id="kt_wizard">
                  {/*begin::Aside*/}
                  <div className="wizard-aside bg-white d-flex flex-column flex-row-auto w-100 w-lg-300px w-xl-400px w-xxl-500px">
                    {/*begin::Aside Top*/}
                    <div className="d-flex flex-column-fluid flex-column px-xxl-30 px-10">
                      {/*begin: Wizard Nav*/}
                      <div className="wizard-nav d-flex d-flex justify-content-center pt-10 pt-lg-20 pb-5">
                        {/*begin::Wizard Steps*/}
                        <div className="wizard-steps">
                          {/*begin::Wizard Step 1 Nav*/}
                          <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">

                            <div className="wizard-wrapper">
                              <div className="wizard-icon">
                                <i className="wizard-check ki ki-check" />
                                <span className="wizard-number">1</span>
                              </div>
                              <div className="wizard-label">
                                <h3 className="wizard-title">Account Settings</h3>
                                <div className="wizard-desc">Setup Your Account Details</div>
                              </div>
                            </div>
                          </div>
                          {/*end::Wizard Step 1 Nav*/}
                          {/*begin::Wizard Step 1 Nav*/}
                          <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                            <div className="wizard-wrapper">
                              <div className="wizard-icon">
                                <i className="wizard-check ki ki-check" />
                                <span className="wizard-number">2</span>
                              </div>
                              <div className="wizard-label">
                                <h3 className="wizard-title">Account Details</h3>
                                <div className="wizard-desc">Setup Your Account Details</div>
                              </div>
                            </div>
                          </div>
                          {/*end::Wizard Step 1 Nav*/}

                          {/*end::Wizard Step 2 Nav*/}
                          {/*begin::Wizard Step 3 Nav*/}
                          <div className="wizard-step" data-wizard-type="step" >
                            <div className="wizard-wrapper">
                              <div className="wizard-icon">
                                <i className="wizard-check ki ki-check" />
                                <span className="wizard-number">4</span>
                              </div>
                              <div className="wizard-label">
                                <h3 className="wizard-title">Completed!</h3>
                                <div className="wizard-desc">Review and Submit</div>
                              </div>
                            </div>
                          </div>


                          {/*end::Wizard Step 3 Nav*/}

                          <div className="wizard-step" data-wizard-type="step">

                          </div>
                        </div>
                        {/*end::Wizard Steps*/}
                      </div>
                      {/*end: Wizard Nav*/}

                    </div>
                    {/*end::Aside Top*/}
                    {/*begin::Aside Bottom*/}


                    {/*end::Aside Bottom*/}
                    <div className="d-flex flex-row-auto bgi-no-repeat bgi-position-y-bottom bgi-position-x-center bgi-size-contain pt-2 pt-lg-8 h-400px" style={{ backgroundImage: 'url(assets/dist/assets/media/svg/illustrations/features.svg)' }} />

                  </div>
                  {/*begin::Aside*/}

                  {/*begin::Content*/}
                  <div className="wizard-content bg-gray-100 d-flex flex-column flex-row-fluid py-15 px-5 px-lg-10">

                    {/*begin::Title*/}
                    {/* <div className="text-right mb-lg-30 mb-15 mr-xxl-10">
                <span className="font-weight-bold text-muted font-size-h5">Having issues?</span>
                <a href="javascript:;" className="font-weight-bolder text-primary font-size-h4" id="kt_login_signup">Get Help</a>
              </div> */}
                    {/*end::Title*/}
                    {/*begin::Form*/}
                    <div className="d-flex justify-content-center flex-row-fluid">
                      <Form onSubmit={this.handleRegister} ref={c => { this.form = c; }}
                        className="pb-5 w-100 w-md-450px w-lg-500px" noValidate="novalidate" id="kt_form">

                        {!this.state.successful && (
                          <div>

                            {/*begin: Wizard Step 1*/}
                            <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                              {/*begin::Title*/}
                              {/* <div className="pb-10 pb-lg-15">
                      <h3 className="font-weight-bolder text-dark font-size-h2">Create Account</h3>
                      <div className="text-muted font-weight-bold font-size-h5">Already have an Account ?
                      <Link to="/login" className="text-primary font-weight-bolder">Sign In</Link> </div>
                    </div> */}
                              {/*begin::Title*/}
                              {/*begin::Form Group*/}

                              <div className="form-group">

                                <label className="font-size-h6 font-weight-bolder text-dark">First Name</label>

                                <Input
                                  name="firstname"
                                  value={this.state.first_name}
                                  onChange={this.onChangeFirstName}
                                  validations={[required]} type="text" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6" placeholder="First Name" defaultValue />
                              </div>
                              {/*end::Form Group*/}

                              {/*begin::Form Group*/}
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Last Name</label>
                                <Input name="lastname"
                                  value={this.state.last_name}
                                  onChange={this.onChangeLastName}
                                  validations={[required]} type="text" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="Last Name" defaultValue />
                              </div>


                              <div className="row">
                                <div className="col-lg-12 col-md-6">
                                  {/*end::Form Group*/}
                                  <div className="form-group">
                                    <label className="font-size-h6 font-weight-bolder text-dark">State</label>
                                    <select value={this.state.state}
                                      onChange={this.onChangeState}
                                      validations={[required]} type="text" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6">
                                      <option value>Select</option>
                                      <option value="ABUJA">ABUJA FCT</option>
                                      <option value="ABIA">ABIA</option>
                                      <option value="ADAMAWA">ADAMAWA</option>
                                      <option value="AKWA IBOM">AKWA IBOM</option>
                                      <option value="ANAMBRA">ANAMBRA</option>
                                      <option value="BAUCHI">BAUCHI</option>
                                      <option value="BAYELSA">BAYELSA</option>
                                      <option value="BENUE">BENUE</option>
                                      <option value="BORNO">BORNO</option>
                                      <option value="CROSS RIVER">CROSS RIVER</option>
                                      <option value="DELTA">DELTA</option>
                                      <option value="EBONYI">EBONYI</option>
                                      <option value="EDO">EDO</option>
                                      <option value="EKITI">EKITI</option>
                                      <option value="ENUGU">ENUGU</option>
                                      <option value="GOMBE">GOMBE</option>
                                      <option value="IMO">IMO</option>
                                      <option value="JIGAWA">JIGAWA</option>
                                      <option value="KADUNA">KADUNA</option>
                                      <option value="KANO">KANO</option>
                                      <option value="KATSINA">KATSINA</option>
                                      <option value="KEBBI">KEBBI</option>
                                      <option value="KOGI">KOGI</option>
                                      <option value="KWARA">KWARA</option>
                                      <option value="LAGOS">LAGOS</option>
                                      <option value="NASSARAWA">NASSARAWA</option>
                                      <option value="NIGER">NIGER</option>
                                      <option value="OGUN">OGUN</option>
                                      <option value="ONDO">ONDO</option>
                                      <option value="OSUN">OSUN</option>
                                      <option value="OYO">OYO</option>
                                      <option value="PLATEAU">PLATEAU</option>
                                      <option value="RIVERS">RIVERS</option>
                                      <option value="SOKOTO">SOKOTO</option>
                                      <option value="TARABA">TARABA</option>
                                      <option value="YOBE">YOBE</option>
                                      <option value="ZAMFARA">ZAMFARA</option>
                                    </select>
                                  </div>
                                  {/*end::Form Group*/}
                                </div>
                              </div>
                              {/*begin::Row*/}
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">LG</label>
                                <Input name="lga"
                                  value={this.state.lga}
                                  onChange={this.onChangeLG}
                                  validations={[required]} type="text" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="LG" />
                              </div>

                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Address</label>
                                <Input name="address"
                                  value={this.state.address}
                                  onChange={this.onChangeAddress}
                                  validations={[required]} type="text" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6" placeholder="Address" />
                              </div>

                              {/*end::Form Group*/}
                            </div>
                            {/*end: Wizard Step 1*/}

                            {/*begin: Wizard Step 2*/}
                            <div className="pb-5" data-wizard-type="step-content">
                              {/*begin::Title*/}
                              {/* <div className="pb-10 pb-lg-15">
                      <h3 className="font-weight-bolder text-dark font-size-h2">Address Details</h3>
                      <div className="text-muted font-weight-bold font-size-h4">Have a Different Address ?
                        <a href="#" className="text-primary font-weight-bolder">Add Address</a></div>
                    </div> */}
                              {/*end::Title*/}
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Username</label>
                                <Input name="username"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  validations={[required]} type="text" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="username" />
                              </div>
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Password</label>
                                <Input name="password"
                                  value={this.state.password}
                                  onChange={this.onChangePassword}
                                  validations={[required]} type="password" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="password" />
                              </div>
                              {/*begin::Form Group*/}
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
                                <Input name="email"
                                  value={this.state.email}
                                  onChange={this.onChangeEmail}
                                  validations={[required]} type="email" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="Email" />
                              </div>

                              {/*begin::Form Group*/}
                              {/*end::Row*/}
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Phone Number</label>
                                <Input name="phonenumber"
                                  value={this.state.phone_number}
                                  onChange={this.onChangePhoneNumber}
                                  validations={[required]} type="text" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="phone number" />
                              </div>
                              <div className="form-group">
                                <label className="font-size-h6 font-weight-bolder text-dark">Date of Birth</label>
                                <Input name="dob"
                                  value={this.state.dob}
                                  onChange={this.onChangeDob}
                                  validations={[required]} type="text" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6" placeholder="YYYY-MM-DD" />
                              </div>

                            </div>
                            {/*end: Wizard Step 2*/}
                            {/*begin: Wizard Step 3*/}
                            <div className="pb-5" data-wizard-type="step-content">
                              {/*begin::Title*/}
                              <div className="pb-10 pb-lg-15">
                                <h3 className="font-weight-bolder text-dark font-size-h2">Complete</h3>
                                <div className="text-muted font-weight-bold font-size-h4">Complete Your Signup And Become A Member!</div>
                              </div>
                              {/*end::Title*/}
                              {/*begin::Section*/}
                              <h2 className="font-weight-bolder mb-3">Accoun Settings:</h2>
                              <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                                <div><h3>First Name: </h3></div>
                                <div ><h4>{this.state.first_name} </h4></div>
                                <div><h3>Last Name:</h3> </div>
                                <div ><h4>{this.state.last_name} </h4></div>
                                <div><h3>State:</h3> </div>
                                <div ><h4>{this.state.state} </h4></div>
                                <div><h3>LG:</h3> </div>
                                <div ><h4>{this.state.lga} </h4></div>
                                <div><h3>Address:</h3> </div>
                                <div ><h4>{this.state.address} </h4></div>
                              </div>
                              {/*end::Section*/}
                              {/*begin::Section*/}
                              <h2 className="font-weight-bolder mb-3">Account Details:</h2>
                              <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                                <div><h3>Username: </h3></div>
                                <div ><h4>{this.state.username} </h4></div>
                                <div><h3>Password: </h3></div>
                                <div ><h4>{this.state.password} </h4></div>
                                <div><h3>Email:</h3> </div>
                                <div ><h4>{this.state.email} </h4></div>
                                <div><h3>Phone Number: </h3></div>
                                <div ><h4>{this.state.phone_number} </h4></div>
                                <div><h3>Date of Birth: </h3></div>
                                <div ><h4>{this.state.dob} </h4></div>
                              </div>
                              <button id="kt_login_singin_form_submit_button"
                                className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                                // data-wizard-type="step-content"
                                disabled={this.state.loading}

                              >
                                {this.state.loading && (
                                  <center><Spinner animation="border" variant="primary" /></center>
                                )}
                                <span>submit</span>
                              </button>

                              {/*end::Section*/}
                              {/*begin::Section*/}
                              {/* <h4 className="font-weight-bolder mb-3">Support Channels:</h4>
                    <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                      <div>Overnight Delivery with Regular Packaging</div>
                      <div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
                    </div> */}
                              {/*end::Section*/}
                            </div>


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

                        <div className="d-flex justify-content-between pt-3">
                          <div className="mr-2">
                            <button type="button" className="btn btn-light-primary font-weight-bolder font-size-h6 pl-6 pr-8 py-4 my-3 mr-3" data-wizard-type="action-prev">
                              <span className="svg-icon svg-icon-md mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)" x={14} y={7} width={2} height={10} rx={1} />
                                    <path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)" />
                                  </g>
                                </svg>
                              </span>Previous</button>
                          </div>
                          <div>

                            <button type="button" className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3" data-wizard-type="action-next">Next Step
      <span className="svg-icon svg-icon-md ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width={2} height={9} rx={1} />
                                    <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                  </g>
                                </svg>
                              </span></button>





                            <CheckButton
                              style={{ display: "none" }}
                              ref={c => {
                                this.checkBtn = c;
                              }}
                            />
                          </div>
                        </div>

                      </Form>
                    </div>
                    {/*end::Form*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Wizard 5*/}
              </div>
              {/*end::Card Body*/}
            </div>
            {/*end::Card*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::Entry*/}

      </div>


    );
  }
}