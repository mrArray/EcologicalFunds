import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// import AuthService from "../services/auth.service";
// import { PostData } from "./PostData";
import { Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'



const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class RegisterProject extends Component {
  
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }
      componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "./assets/dist/assets/js/pages/custom/wizard/wizard-1.js";
        script.async = true;

    
        document.body.appendChild(script);
    }
    
      
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        
            
        
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

         <div>
  {/*begin::Main*/}

  <div className="d-flex flex-column flex-root">
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
            <Header/>

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
                        {/*end::Wizard Step 1 Nav*/}
                        {/*begin::Wizard Step 2 Nav*/}
                        <div className="wizard-step" data-wizard-type="step">
                          <div className="wizard-label">
                            <i className="wizard-icon flaticon-bus-stop" />
                            <h3 className="wizard-title">2. Project Location</h3>
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
                        {/*end::Wizard Step 2 Nav*/}
                        {/*begin::Wizard Step 3 Nav*/}
                        <div className="wizard-step" data-wizard-type="step">
                          <div className="wizard-label">
                            <i className="wizard-icon flaticon-responsive" />
                            <h3 className="wizard-title">3. Project Cost</h3>
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
                        {/*end::Wizard Step 3 Nav*/}
                        {/*begin::Wizard Step 4 Nav*/}
                        <div className="wizard-step" data-wizard-type="step">
                          <div className="wizard-label">
                            <i className="wizard-icon flaticon-truck" />
                            <h3 className="wizard-title">4. Project Duration</h3>
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
                            <h3 className="wizard-title">5. Review and Submit</h3>
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
                      </div>
                    </div>
                    {/*end::Wizard Nav*/}
                    {/*begin::Wizard Body*/}
                    <div className="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
                      <div className="col-xl-12 col-xxl-7">
                        {/*begin::Wizard Form*/}
                        <form className="form" id="kt_form">
                          {/*begin::Wizard Step 1*/}
                          <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                            <h3 className="mb-10 font-weight-bold text-dark">Setup Your Current Location</h3>
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Address Line 1</label>
                              <input type="text" className="form-control form-control-solid form-control-lg" name="address1" placeholder="Address Line 1" defaultValue="Address Line 1" />
                              <span className="form-text text-muted">Please enter your Address.</span>
                            </div>
                            {/*end::Input*/}
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Address Line 2</label>
                              <input type="text" className="form-control form-control-solid form-control-lg" name="address2" placeholder="Address Line 2" defaultValue="Address Line 2" />
                              <span className="form-text text-muted">Please enter your Address.</span>
                            </div>
                            {/*end::Input*/}
                            <div className="row">
                              <div className="col-xl-6">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>Postcode</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="postcode" placeholder="Postcode" defaultValue={3000} />
                                  <span className="form-text text-muted">Please enter your Postcode.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                              <div className="col-xl-6">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>City</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="city" placeholder="City" defaultValue="Melbourne" />
                                  <span className="form-text text-muted">Please enter your City.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-6">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>State</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="state" placeholder="State" defaultValue="VIC" />
                                  <span className="form-text text-muted">Please enter your State.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                              <div className="col-xl-6">
                                {/*begin::Select*/}
                                <div className="form-group">
                                  <label>Country</label>
                                  <select name="country" className="form-control form-control-solid form-control-lg">
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
                                </div>
                                {/*end::Select*/}
                              </div>
                            </div>
                          </div>
                          {/*end::Wizard Step 1*/}
                          {/*begin::Wizard Step 2*/}
                          <div className="pb-5" data-wizard-type="step-content">
                            <h4 className="mb-10 font-weight-bold text-dark">Enter the Details of your Delivery</h4>
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Package Details</label>
                              <input type="text" className="form-control form-control-solid form-control-lg" name="package" placeholder="Package Details" defaultValue="Complete Workstation (Monitor, Computer, Keyboard & Mouse)" />
                              <span className="form-text text-muted">Please enter your Pakcage Details.</span>
                            </div>
                            {/*end::Input*/}
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Package Weight in KG</label>
                              <input type="text" className="form-control form-control-solid form-control-lg" name="weight" placeholder="Package Weight" defaultValue={25} />
                              <span className="form-text text-muted">Please enter your Package Weight in KG.</span>
                            </div>
                            {/*end::Input*/}
                            <div className="row">
                              <div className="col-xl-4">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>Package Width in CM</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="width" placeholder="Package Width" defaultValue={110} />
                                  <span className="form-text text-muted">Please enter your Package Width in CM.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                              <div className="col-xl-4">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>Package Height in CM</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="height" placeholder="Package Height" defaultValue={90} />
                                  <span className="form-text text-muted">Please enter your Package Height in CM.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                              <div className="col-xl-4">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>Package Length in CM</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="packagelength" placeholder="Package Length" defaultValue={150} />
                                  <span className="form-text text-muted">Please enter your Package Length in CM.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                            </div>
                          </div>
                          {/*end::Wizard Step 2*/}
                          {/*begin::Wizard Step 3*/}
                          <div className="pb-5" data-wizard-type="step-content">
                            <h4 className="mb-10 font-weight-bold text-dark">Select your Services</h4>
                            {/*begin::Select*/}
                            <div className="form-group">
                              <label>Delivery Type</label>
                              <select name="delivery" className="form-control form-control-solid form-control-lg">
                                <option value>Select a Service Type Option</option>
                                <option value="overnight" selected="selected">Overnight Delivery (within 48 hours)</option>
                                <option value="express">Express Delivery (within 5 working days)</option>
                                <option value="basic">Basic Delivery (within 5 - 10 working days)</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Select*/}
                            <div className="form-group">
                              <label>Packaging Type</label>
                              <select name="packaging" className="form-control form-control-solid form-control-lg">
                                <option value>Select a Packaging Type Option</option>
                                <option value="regular" selected="selected">Regular Packaging</option>
                                <option value="oversized">Oversized Packaging</option>
                                <option value="fragile">Fragile Packaging</option>
                                <option value="frozen">Frozen Packaging</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Select*/}
                            <div className="form-group">
                              <label>Preferred Delivery Window</label>
                              <select name="preferreddelivery" className="form-control form-control-solid form-control-lg">
                                <option value>Select a Preferred Delivery Option</option>
                                <option value="morning" selected="selected">Morning Delivery (8:00AM - 11:00AM)</option>
                                <option value="afternoon">Afternoon Delivery (11:00AM - 3:00PM)</option>
                                <option value="evening">Evening Delivery (3:00PM - 7:00PM)</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                          </div>
                          {/*end::Wizard Step 3*/}
                          {/*begin::Wizard Step 4*/}
                          <div className="pb-5" data-wizard-type="step-content">
                            <h4 className="mb-10 font-weight-bold text-dark">Setup Your Delivery Location</h4>
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Address Line 1</label>
                              <input type="text" className="form-control form-control-solid form-control-lg" name="locaddress1" placeholder="Address Line 1" defaultValue="Address Line 1" />
                              <span className="form-text text-muted">Please enter your Address.</span>
                            </div>
                            {/*end::Input*/}
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Address Line 2</label>
                              <input type="text" className="form-control form-control-solid form-control-lg" name="locaddress2" placeholder="Address Line 2" defaultValue="Address Line 2" />
                              <span className="form-text text-muted">Please enter your Address.</span>
                            </div>
                            {/*end::Input*/}
                            <div className="row">
                              <div className="col-xl-6">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>Postcode</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="locpostcode" placeholder="Postcode" defaultValue={3072} />
                                  <span className="form-text text-muted">Please enter your Postcode.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                              <div className="col-xl-6">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>City</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="loccity" placeholder="City" defaultValue="Preston" />
                                  <span className="form-text text-muted">Please enter your City.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-6">
                                {/*begin::Input*/}
                                <div className="form-group">
                                  <label>State</label>
                                  <input type="text" className="form-control form-control-solid form-control-lg" name="locstate" placeholder="State" defaultValue="VIC" />
                                  <span className="form-text text-muted">Please enter your State.</span>
                                </div>
                                {/*end::Input*/}
                              </div>
                              <div className="col-xl-6">
                                {/*begin::Select*/}
                                <div className="form-group">
                                  <label>Country</label>
                                  <select name="loccountry" className="form-control form-control-solid form-control-lg">
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
                                </div>
                                {/*end::Select*/}
                              </div>
                            </div>
                          </div>
                          {/*end::Wizard Step 4*/}
                          {/*begin::Wizard Step 5*/}
                          <div className="pb-5" data-wizard-type="step-content">
                            {/*begin::Section*/}
                            <h4 className="mb-10 font-weight-bold text-dark">Review your Details and Submit</h4>
                            <h6 className="font-weight-bolder mb-3">Current Address:</h6>
                            <div className="text-dark-50 line-height-lg">
                              <div>Address Line 1</div>
                              <div>Address Line 2</div>
                              <div>Melbourne 3000, VIC, Australia</div>
                            </div>
                            <div className="separator separator-dashed my-5" />
                            {/*end::Section*/}
                            {/*begin::Section*/}
                            <h6 className="font-weight-bolder mb-3">Delivery Details:</h6>
                            <div className="text-dark-50 line-height-lg">
                              <div>Package: Complete Workstation (Monitor, Computer, Keyboard &amp; Mouse)</div>
                              <div>Weight: 25kg</div>
                              <div>Dimensions: 110cm (w) x 90cm (h) x 150cm (L)</div>
                            </div>
                            <div className="separator separator-dashed my-5" />
                            {/*end::Section*/}
                            {/*begin::Section*/}
                            <h6 className="font-weight-bolder mb-3">Delivery Service Type:</h6>
                            <div className="text-dark-50 line-height-lg">
                              <div>Overnight Delivery with Regular Packaging</div>
                              <div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
                            </div>
                            <div className="separator separator-dashed my-5" />
                            {/*end::Section*/}
                            {/*begin::Section*/}
                            <h6 className="font-weight-bolder mb-3">Delivery Address:</h6>
                            <div className="text-dark-50 line-height-lg">
                              <div>Address Line 1</div>
                              <div>Address Line 2</div>
                              <div>Preston 3072, VIC, Australia</div>
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Wizard Step 5*/}
                          {/*begin::Wizard Actions*/}
                          <div className="d-flex justify-content-between border-top mt-5 pt-10">
                            <div className="mr-2">
                              <button type="button" className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-prev">Previous</button>
                            </div>
                            <div>
                              <button type="button" className="btn btn-success font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-submit">Submit</button>
                              <button type="button" className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-next">Next</button>
                            </div>
                          </div>
                          {/*end::Wizard Actions*/}
                        </form>
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
          <div className="symbol-label" style={{backgroundImage: 'url("assets/media/users/300_21.jpg")'}} />
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
  
  {/*begin::Demo Panel*/}
  <div id="kt_demo_panel" className="offcanvas offcanvas-right p-10">
    {/*begin::Header*/}
    <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
      <h4 className="font-weight-bold m-0">Select A Demo</h4>
      <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_demo_panel_close">
        <i className="ki ki-close icon-xs text-muted" />
      </a>
    </div>
    {/*end::Header*/}
    {/*begin::Content*/}
    <div className="offcanvas-content">
      {/*begin::Wrapper*/}
      <div className="offcanvas-wrapper mb-5 scroll-pull">
        <h5 className="font-weight-bold mb-4 text-center">Demo 1</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo1.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo1/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo1/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 2</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo2.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo2/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo2/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 3</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo3.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo3/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo3/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 4</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo4.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo4/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo4/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 5</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo5.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo5/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo5/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 6</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo6.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo6/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo6/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 7</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo offcanvas-demo-active">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo7.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo7/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo7/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 8</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo8.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo8/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo8/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 9</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo9.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo9/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo9/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 10</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo10.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo10/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo10/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 11</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo11.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo11/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo11/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 12</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo12.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo12/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo12/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 13</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo13.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="../../../../../demo13/dist" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">Default</a>
            <a href="https://preview.keenthemes.com/metronic/demo13/rtl/index.html" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow" target="_blank">RTL Version</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 14</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo14.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 15</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo15.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 16</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo16.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 17</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo17.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 18</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo18.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 19</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo19.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 20</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo20.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 21</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo21.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 22</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo22.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 23</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo23.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 24</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo24.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 25</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo25.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 26</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo26.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 27</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo27.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 28</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo28.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 29</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo29.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
        <h5 className="font-weight-bold mb-4 text-center">Demo 30</h5>
        <div className="overlay rounded-lg mb-8 offcanvas-demo">
          <div className="overlay-wrapper rounded-lg">
            <img src="assets/media/demos/demo30.png" alt className="w-100" />
          </div>
          <div className="overlay-layer">
            <a href="#" className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming soon</a>
          </div>
        </div>
      </div>
      {/*end::Wrapper*/}
      {/*begin::Purchase*/}
      <div className="offcanvas-footer">
        <a href="https://1.envato.market/EA4JP" target="_blank" className="btn btn-block btn-danger btn-shadow font-weight-bolder text-uppercase">Buy Metronic Now!</a>
      </div>
      {/*end::Purchase*/}
    </div>
    {/*end::Content*/}
  </div>
  {/*end::Demo Panel*/}
  {/*begin::Global Config(global config for global JS scripts)*/}
  {/*end::Global Config*/}
  {/*begin::Global Theme Bundle(used by all pages)*/}
  {/*end::Global Theme Bundle*/}
  {/*begin::Page Scripts(used by this page)*/}
  {/*end::Page Scripts*/}
</div>
    
);
    }
}