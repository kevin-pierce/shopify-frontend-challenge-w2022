import React from 'react';
import RocketIcon from "../../assets/rocket-loader.svg"
import { Button } from 'react-bootstrap'

import "./homepage.scss";

const HomePage = ({openSpacestagram}) => {
    return (
        <div className="homepage-wrapper">
            <div className="homepage-header">
                <h1>SPACESTAGRAM</h1>
                <img height="60" src={RocketIcon}/>
            </div>
            <Button onClick={openSpacestagram}>Begin your journey</Button>
        </div>
        
    )
}

export default HomePage;