import React, { Component } from 'react'
import moment from 'moment';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:moment().format('LTS')
        }
        this._isMounted = false;
        moment.locale();
    }
    componentDidMount(){
        this._isMounted = true;
        this.timer = setInterval(()=>{
            if(this._isMounted) {
                this.setState({date:moment().format('LTS')});
            }

        })
    }
    UNSAFE_componentWillMount(){
        clearInterval(this.timer);
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    render() {

        return (
            <div className={this.props.className ? thisprops.className : "clock"} style={this.props.style ? this.props.style : {}}>
                <i className="far fa-clock"/> <span>{this.state.date}</span>
            </div>
        )
    }
}
