import React from 'react';
import { Route, Switch, Link, NavLink, Redirect, Router } from "react-router-dom";
import './App.css';
import GetSmartCard from "./views/GetSmartCard";
import Dashboard from "./views/Dashboard";
import ViewTimetable from "./views/ViewTimetable";
//import FormCreatorPage from "./Components/Pages/FormCreatorPage";

export default class App extends React.Component {

  render() {
    return (
      <>
        <Switch>
          {/* <Route path="/">
            <Dashboard />
          </Route> */}
          <Route path="/"  component={Dashboard} exact/>
          <Route path="/getSmartCard"  component={GetSmartCard}/>
          <Route path="/timetables"  component={ViewTimetable}/>

            
        </Switch>
      </>
    );
  }
}
