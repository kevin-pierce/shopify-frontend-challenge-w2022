import React from 'react';
import LoadingIcon from '../../assets/rocket-loader.svg'
import './loader.scss';

const LoadingMessages = [
    "Scouring space for images",
    "Asking NOAA DSCOVR to send images",
    "Exploring the universe for images",
    "Kindly asking NASA for images"
]

const Loader = () => {
    const randMsg = LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)]

    return (
        <div className="loading-wrapper">
            <img className="loader" src={LoadingIcon} width="100" alt="Loading Icon" />
            <h4>{randMsg}</h4>
        </div>
    )
}

export default Loader