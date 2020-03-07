import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HsHeader from './components/header';
import HsMenu from './components/menu';

function App() {
  return (
    <Router>
<div style={{minHeight: '100vh', display: 'flex', flexFlow: 'column nowrap'}}>
      <HsHeader />
      <Grid columns='equal'>
        <Grid.Column>
          <Segment><HsMenu /></Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment>
            <Switch>
              <Route exact path="/">
                home
              </Route>
              <Route path="/browser-classification">
                browser classification
              </Route>
              <Route path="/webcam">
                webcam
              </Route>
            </Switch>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid>
    </div>
    </Router>
  );
}

export default App;
