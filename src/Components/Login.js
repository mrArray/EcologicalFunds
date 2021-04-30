import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthLogin from "../Authentications/AuthLogin";
// import { PostData } from "./PostData";
import { Link, Switch,Redirect } from 'react-router-dom';



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      // TaskManager: false,
      // currentUser: undefined
    };
  }


  componentDidMount(){

    if (localStorage.getItem('user')) {
      return (<Redirect to={'/dashboard'} />)
  }
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
 if (this.checkBtn.context._errors.length === 0) {
      AuthLogin.login(this.state.username, this.state.password).then(
        () => {
          
          this.props.history.push("/dashboard");
          window.location.reload();
          
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
      this.setState({
        loading: false
      });
    }
  


  render() {

    

    const { loading } = this.state;

    return (

      <div className="d-flex flex-column flex-root">
      {/*begin::Login*/}
<div className="login login-3 wizard d-flex flex-column flex-lg-row flex-column-fluid">
  {/*begin::Aside*/}
  <div className="login-aside d-flex flex-column flex-row-auto">
    {/*begin::Aside Top*/}
    <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
      {/*begin::Aside header*/}
      <a href="#" className="login-logo text-center pt-lg-25 pb-10">
        <h1>CHINIKIGUARD</h1>
        {/* <img src="assets/dist/assets/media/logos/logo-1.png" className="max-h-70px" alt /> */}
      </a>
      {/*end::Aside header*/}
      {/*begin::Aside Title*/}
      <h3 className="font-weight-bolder text-center font-size-h4 text-dark-50 line-height-xl">Projects Management &amp; Tracking System
        <br />Best Project Tracking System</h3>
      {/*end::Aside Title*/}
    </div>
    {/*end::Aside Top*/}
    {/*begin::Aside Bottom*/}
    <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center" style={{backgroundPositionY: 'calc(100% + 5rem)', backgroundImage: 'url(assets/dist/assets/media/svg/illustrations/login-visual-5.svg)'}} />
    {/*end::Aside Bottom*/}
  </div>
  {/*begin::Aside*/}
  {/*begin::Content*/}
  <div className="login-content flex-row-fluid d-flex flex-column p-10">
    
    {/*begin::Wrapper*/}
    <div className="d-flex flex-row-fluid flex-center">
      {/*begin::Signin*/}
      <div className="login-form">
        {/*begin::Form*/}
			<Form onSubmit={this.handleLogin}
			  ref={c => {
				this.form = c;
			  }}
			  className="form" id="kt_login_singin_form" action>
			  {/*begin::Title*/}
			  <div className="pb-5 pb-lg-15">
				<h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Sign In</h3>
				<div className="text-muted font-weight-bold font-size-h4">New Here?
			<Link to="/register" className="text-primary font-weight-bolder">Create Account</Link> </div>
			  </div>
			  {/*begin::Title*/}
			  {/*begin::Form group*/}

			  <div className="form-group">
				<label className="font-size-h6 font-weight-bolder text-dark">Your Username</label>
				<Input className="form-control h-auto py-7 px-6 rounded-lg border-0" type="text" name="username" autoComplete="off" placeholder="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required]} />
			  </div>

			  {/*end::Form group*/}
			  {/*begin::Form group*/}
			  <div className="form-group">
				<div className="d-flex justify-content-between mt-n5">
				  <label className="font-size-h6 font-weight-bolder text-dark pt-5">Your Password</label>
				  <a href="custom/pages/login/login-3/forgot.html" className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">Forgot Password ?</a>
				</div>
				<Input className="form-control h-auto py-7 px-6 rounded-lg border-0" type="password" name="password" placeholder="Password" value={this.state.password}
				  onChange={this.onChangePassword}
				  validations={[required]} autoComplete="off" />
			  </div>
			  {/*end::Form group*/}
			  {/*begin::Action*/}

			  <div className="pb-lg-0 pb-5">

				<button id="kt_login_singin_form_submit_button"
				  className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
				  disabled={this.state.loading}
				>
				  {this.state.loading && (
					<span className="spinner-border spinner-border-sm"></span>
				  )}
				  <span>Login</span>
				</button>
			  </div>


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

			</Form>

          {/*end::Form*/}
      </div>
      {/*end::Signin*/}
    </div>
    {/*end::Wrapper*/}
  </div>
  {/*end::Content*/}
</div>
{/*end::Login*/}

      </div>


    );
  }
}