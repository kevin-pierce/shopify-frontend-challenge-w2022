import React, { useState } from 'react';
import RocketIcon from "../../assets/rocket-loader.svg"
import { Button } from 'react-bootstrap'

import "./homepage.scss";

const HomePage = ({openSpacestagram}) => {
    const [animateShip, setAnimateShip] = useState("")

    return (
        <div className="homepage-wrapper">
            <div className="homepage-header">
                <h1 className={animateShip ? "fadeout-animation" : ""}>SPACESTAGRAM</h1>
                <img height="60" width="60" src={RocketIcon} alt="spacestagram main logo" className={animateShip}/>
            </div>
            <Button aria-label="Open spacestagram" className={animateShip ? "fadeout-animation" : ""} onClick={() => {
                setAnimateShip("animate-mode")
                openSpacestagram()}}>Begin your journey</Button>
        </div>
    )
}

export default HomePage;