import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Header from './Header';
import ProjectList from './ProjectList';
import { Editor } from '@tinymce/tinymce-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/App.css';
import Home from './Home';
import {Button} from './Buttons';


export default class App extends Component {
   render() {
       return (
            <React.Fragment>
                <Router>
                    <Header/>
                    <div className="container py-4">
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route  path='/projects'>
                                <div className="form-group">
                                    <Button>noveau projet</Button>
                                </div>
                                <ProjectList/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
       );
   }

}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
