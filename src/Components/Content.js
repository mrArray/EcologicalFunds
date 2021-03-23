import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import RegisterProject from './RegisterProject';
import Home from './Home';
import AllProjects from './AllProjects';
import Dashboard from './Dashboard';








const  Content = () => {


    
    return (
       <Switch>
  

  <Route exact path="/" component={Home}/>
           <Route  path="/Home" component={Home}/> 

          <Route exact path="/" component={Register}/>
           <Route  path="/Register" component={Register}/> 

           <Route exact path="/" component={Login}/>
           <Route  path="/Login" component={Login}/> 

           

           <Route exact path="/" component={RegisterProject}/>
           <Route  path="/RegisterProject" component={RegisterProject}/>

           <Route exact path="/" component={AllProjects}/>
           <Route  path="/allProjects" component={AllProjects}/>

           <Route exact path="/" component={Dashboard}/>
           <Route  path="/Dashboard" component={Dashboard}/>


       </Switch>

       
    )
}


export default Content;