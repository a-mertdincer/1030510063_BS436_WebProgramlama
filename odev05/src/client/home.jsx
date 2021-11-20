import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class home extends Component {
    render() {
        return (
            <div>
                Kart Oyunu
                <p className="welcome-text">Hadi bakalim Recep, 2 denemede kediyi bulabilecen mi acep?</p>
                <div className="action"><Link className="play" to ={"/game"}>Oyna</Link></div>
            </div>
        )
    }
}
