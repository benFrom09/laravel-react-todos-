import React from 'react';
import {Button} from './Buttons';

export default class AnnouncementList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements:[]
        }
    }
    render(){
        const {announcements} = this.state;
        return (

            <div className="card announcement">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title">Annonces</h4>
                        <Button enabled={true}><i className="fas fa-plus"/>Ajouter</Button>
                    </div>
                    {announcements.length > 0 ?
                    <ul>
                        {announcements.map(announcement => {
                            <li>announcement</li>
                        })}
                    </ul>
                    :<p>Aucune annonce</p>}
                </div>
            </div>

        );
    }

}
