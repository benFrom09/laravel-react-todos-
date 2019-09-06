import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Header from './Header';
import ProjectList from './ProjectList';
import { Editor } from '@tinymce/tinymce-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/App.css';


export default class App extends Component {
   render() {
       return (
            <React.Fragment>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={ProjectList}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
       );
   }

}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
