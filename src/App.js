import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import { Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/project-details/ProjectDetails';
import SignIn from './components/auth/signin/SignIn';
import { SignUp } from './components/auth/signup/SignUp';
import { CreateProject } from './components/projects/create-project/CreateProject';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Dashboard}/>
      <Route path="/project/:id" component={ProjectDetails} />
      <Route path="/signin" component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/create' component={CreateProject} />
    </div>
  );
}

export default App;
