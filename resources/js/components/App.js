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
import moment from 'moment';
import Modal from './Modal';
import ProjectForm from './ProjectForm';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,
            showModal:false,
            modalContent:"Ceci est un exemple",
            modalTitle:"Exemple",
            pColors:[
                '#B200FF','#EE4884','#B200FF','#8860C8',
                '#6675C6','#2192E8','#03A4E8','#01B4C7',
                '#009385','#3F9843','#72A83F','#F9B128',
                '#FF7B4B','#FF5722','#CA3A38','#795548',
            ]
        }
        moment.locale('fr');
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(context,title){
        this.setState({showModal:!this.state.showModal,modalContent:context,modalTitle:title});
    }
    closeModal() {
        this.setState({showModal:!this.state.showModal});
    }
   render() {

       return (
            <React.Fragment>
                <Router>
                    <Header/>
                    <div className="container py-4">
                        <Switch>
                            <Route exact path='/'>
                                <Home color={this.state.pColors} user={this.state.user ? this.state.user : "user"} date={moment().format('LL')}/>
                            </Route>
                            <Route  path='/projects'>
                                <div className="form-group">
                                    <Button onClick={()=>this.openModal(<ProjectForm color={this.state.pColors}/>,"Ajouter un projet")}>noveau projet</Button>
                                </div>
                                <ProjectList color={this.state.pColors}/>
                            </Route>
                        </Switch>
                    </div>
                    <Modal title={this.state.modalTitle} content={this.state.modalContent} close={this.closeModal} show={this.state.showModal}/>
                </Router>
            </React.Fragment>
       );
   }

}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
