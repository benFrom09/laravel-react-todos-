import React from 'react';
import {Button} from './Buttons';

export default function AnnouncementList() {
    return (

            <div className="card announcement">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title">Annonces</h4>
                        <Button><i className="fas fa-plus"/>Ajouter</Button>
                    </div>

                    <ul>
                        <li>annoucement 1</li>
                        <li>annoucement 2</li>
                        <li>annoucement 3</li>

                    </ul>
                </div>
            </div>

    )
}
