import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import RegisterProject from './RegisterProject';
import Home from './Home';
import AllProjects from './AllProjects';
import Dashboard from './Dashboard';
import AssignTask from './AssignTask';
import Alltasks from './Alltasks';
import EditProject from './EditProject';
import EditTask from './EditTask';
import TaskManagerDashboard from './TaskManagerDashboard';
import UserProfile from './UserProfile';
import OngoingTask from './OngoingTask';
import OpenTask from './OpenTask';
import CompletedTask from './CompletedTask';
import EditTaskImage from './EditTaskImage';
import CompletedProjects from './CompletedProjects';









const Content = () => {



    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />

            <Route exact path="/" component={Register} />
            <Route path="/Register" component={Register} />

            <Route exact path="/" component={Login} />
            <Route path="/Login" component={Login} />

            <Route exact path="/" component={RegisterProject} />
            <Route path="/RegisterProject" component={RegisterProject} />

            <Route exact path="/" component={AllProjects} />
            <Route path="/allProjects" component={AllProjects} />

            <Route exact path="/" component={Dashboard} />
            <Route path="/Dashboard" component={Dashboard} />

            <Route exact path="/" component={AssignTask} />
            <Route path="/AssignTask" component={AssignTask} />

            <Route exact path="/" component={Alltasks} />
            <Route path="/Alltasks" component={Alltasks} />

            <Route exact path="/" component={EditProject} />
            <Route path="/EditProject" component={EditProject} />

          

            <Route exact path="/" component={EditTask} />
            <Route path="/EditTask" component={EditTask} />

            <Route exact path="/" component={TaskManagerDashboard} />
            <Route path="/TaskManagerDashboard" component={TaskManagerDashboard} />

            <Route exact path="/" component={UserProfile} />
            <Route path="/UserProfile" component={UserProfile} />

            <Route exact path="/" component={OngoingTask} />
            <Route path="/OngoingTask" component={OngoingTask} />

            <Route exact path="/" component={OpenTask} />
            <Route path="/OpenTask" component={OpenTask} />

            <Route exact path="/" component={CompletedTask} />
            <Route path="/CompletedTask" component={CompletedTask} />

            <Route exact path="/" component={EditTaskImage} />
            <Route path="/EditTaskImages" component={EditTaskImage} />

            <Route exact path="/" component={CompletedProjects} />
            <Route path="/CompletedProjects" component={CompletedProjects} />


        </Switch>


    )
}


export default Content;