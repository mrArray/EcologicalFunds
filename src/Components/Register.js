import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link, Switch , Redirect} from 'react-router-dom'
import AuthLogin from "../Authentications/AuthLogin";


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

export default class Register  extends Component {

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeLG= this.onChangeLG.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      firstName:"",
      lastName:"",
      address:"",
      lG:"",
      state:"",
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-5.js";
    script.async = true;

    document.body.appendChild(script);
}
  


  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeLG(e) {
    this.setState({
      lG: e.target.value
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

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthLogin.register(
        this.state.username,
        this.state.email,
        this.state.password
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

        const {loading} = this.state;

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
                    {/*begin::Wizard Step 2 Nav*/}
                    <div className="wizard-step" data-wizard-type="step">
                      <div className="wizard-wrapper">
                        <div className="wizard-icon">
                          <i className="wizard-check ki ki-check" />
                          <span className="wizard-number">2</span>
                        </div>
                        <div className="wizard-label">
                          <h3 className="wizard-title">Address Details</h3>
                          <div className="wizard-desc">Setup Residence Address</div>
                        </div>
                      </div>
                    </div>
                    {/*end::Wizard Step 2 Nav*/}
                    {/*begin::Wizard Step 3 Nav*/}
                    <div className="wizard-step" data-wizard-type="step">
                      <div className="wizard-wrapper">
                        <div className="wizard-icon">
                          <i className="wizard-check ki ki-check" />
                          <span className="wizard-number">3</span>
                        </div>
                        <div className="wizard-label">
                          <h3 className="wizard-title">Completed!</h3>
                          <div className="wizard-desc">Review and Submit</div>
                        </div>
                      </div>
                    </div>
                    {/*end::Wizard Step 3 Nav*/}
                  </div>
                  {/*end::Wizard Steps*/}
                </div>
                {/*end: Wizard Nav*/}
                
              </div>
              {/*end::Aside Top*/}
              {/*begin::Aside Bottom*/}
              {/*end::Aside Bottom*/}
              <div className="d-flex flex-row-auto bgi-no-repeat bgi-position-y-bottom bgi-position-x-center bgi-size-contain pt-2 pt-lg-8 h-400px" style={{backgroundImage: 'url(assets/dist/assets/media/svg/illustrations/fundsecolo.png)'}} />

            </div>
            {/*begin::Aside*/}

            {/*begin::Content*/}
            <div className="wizard-content bg-gray-100 d-flex flex-column flex-row-fluid py-15 px-5 px-lg-10">
              
              {/*begin::Title*/}
              <div className="text-right mb-lg-30 mb-15 mr-xxl-10">
                <span className="font-weight-bold text-muted font-size-h5">Having issues?</span>
                <a href="javascript:;" className="font-weight-bolder text-primary font-size-h4" id="kt_login_signup">Get Help</a>
              </div>
              {/*end::Title*/}
              {/*begin::Form*/}
              <div className="d-flex justify-content-center flex-row-fluid">
          <Form  onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}className="pb-5 w-100 w-md-450px w-lg-500px" noValidate="novalidate" id="kt_form">
                  {/*begin: Wizard Step 1*/}
                  <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                    {/*begin::Title*/}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="font-weight-bolder text-dark font-size-h2">Create Account</h3>
                      <div className="text-muted font-weight-bold font-size-h5">Already have an Account ?
                      <Link to="/login" className="text-primary font-weight-bolder">Sign In</Link> </div>
                    </div>
                    {/*begin::Title*/}
                    {/*begin::Form Group*/}
                    
                    <div className="form-group">
                      
                      <label className="font-size-h6 font-weight-bolder text-dark">First Name</label>
                    
                    <Input  
                    name="firstname"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    validations={[required, vusername]} type="text" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6"  placeholder="First Name" defaultValue />
                    </div>
                    {/*end::Form Group*/}

                    {/*begin::Form Group*/}
                    <div className="form-group">
                      <label className="font-size-h6 font-weight-bolder text-dark">Last Name</label>
                    <Input name="lastname"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    validations={[required, vusername]} type="text" className="form-control h-auto p-6 border-0 rounded-lg font-size-h6"  placeholder="Last Name" defaultValue />
                    </div>
                    {/*end::Form Group*/}
                  </div>
                  {/*end: Wizard Step 1*/}
                  {/*begin: Wizard Step 2*/}
                  <div className="pb-5" data-wizard-type="step-content">
                    {/*begin::Title*/}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="font-weight-bolder text-dark font-size-h2">Address Details</h3>
                      <div className="text-muted font-weight-bold font-size-h4">Have a Different Address ?
                        <a href="#" className="text-primary font-weight-bolder">Add Address</a></div>
                    </div>
                    {/*end::Title*/}
                    {/*begin::Form Group*/}
                    <div className="form-group">
                      <label className="font-size-h6 font-weight-bolder text-dark">Address Line</label>
                      <Input name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required]} type="text" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6" placeholder="Address Line 1" defaultValue="Address Line" />
                    </div>
                    {/*begin::Form Group*/}
                    {/*end::Row*/}
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        {/*end::Form Group*/}
                        <div className="form-group">
                          <label className="font-size-h6 font-weight-bolder text-dark">State</label>
                          <Input name="state"
                    value={this.state.state}
                    onChange={this.onChangeState}
                    validations={[required, vusername]}  type="text" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6"  placeholder="state" defaultValue="Melbourne" />
                        </div>
                        {/*begin::Form Group*/}
                      </div>
                      <div className="col-lg-6 col-md-6">
                        {/*end::Form Group*/}
                        {/* <div className="form-group">
                          <label className="font-size-h6 font-weight-bolder text-dark">Country</label>
                          <select name="country" className="form-control h-auto p-5 border-0 rounded-lg font-size-h6">
                            <option value>Select</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU" selected="selected">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia, Plurinational State of</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten (Dutch part)</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div> */}
                        {/*end::Form Group*/}
                      </div>
                    </div>
                    {/*begin::Row*/}
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
                    <div ><h4>{this.state.firstName} </h4></div>
                    <div><h3>Last Name:</h3> </div>
                    <div ><h4>{this.state.lastName} </h4></div>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <h2 className="font-weight-bolder mb-3">Address Details:</h2>
                    <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                      <div><h3>Address: </h3></div>
                      <div ><h4>{this.state.address} </h4></div>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    {/* <h4 className="font-weight-bolder mb-3">Support Channels:</h4>
                    <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                      <div>Overnight Delivery with Regular Packaging</div>
                      <div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
                    </div> */}
                    {/*end::Section*/}
                  </div>
                  {/*end: Wizard Step 3*/}
                  {/*begin: Wizard Actions*/}
                  <div className="d-flex justify-content-between pt-3">
                    <div className="mr-2">
                      <button type="button" className="btn btn-light-primary font-weight-bolder font-size-h6 pl-6 pr-8 py-4 my-3 mr-3" data-wizard-type="action-prev">
                        <span className="svg-icon svg-icon-md mr-1">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Left-2.svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)" x={14} y={7} width={2} height={10} rx={1} />
                              <path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)" />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>Previous</button>
                    </div>
                    <div>
                      <button type="button" disabled={this.state.loading}className="btn btn-primary font-weight-bolder font-size-h6 pl-5 pr-8 py-4 my-3" data-wizard-type="action-submit">
                      {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                        Submit
                      
                      
                                
                      
                        <span className="svg-icon svg-icon-md ml-2">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Right-2.svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width={2} height={9} rx={1} />
                              <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span></button>
                      <button type="button" className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3" data-wizard-type="action-next">Next Step
                        <span className="svg-icon svg-icon-md ml-1">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Right-2.svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width={2} height={9} rx={1} />
                              <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span></button>
                        {this.state.message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton
                                    style={{ display: "none" }}
                                    ref={c => {
                                        this.checkBtn = c;
                                    }}
                                />
                    </div>
                  </div>
                  {/*end: Wizard Actions*/}
                  
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