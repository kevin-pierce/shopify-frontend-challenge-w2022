import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "./spacestagram-view.scss"
import RocketIcon from "../../assets/rocket-loader.svg"


import SpacestagramCard from '../../components/spacestagram-card/spacestagram-card';
import Loader from '../../components/loader/loader';
import { Toast, ToastContainer, Navbar, Container } from "react-bootstrap"

const SpacestagramView = () => {
    const [imgMetaData, setMetaImgData] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)
    const [toastMsgs, setToastMsgs] = useState([])

    useEffect(() => {
        getEPICImgMetaData()
    }, [])

    // Auto remove toast messages after 3 seconds
    useEffect(() => {
        if (toastMsgs.length > 0) {
            window.setTimeout(() => {
                setToastMsgs(toastMsgs => (toastMsgs.slice(1)))
            }, 3000)
        }
    }, [toastMsgs])

    // Makes request to NASA API
    const getEPICImgMetaData = async () => {
        await axios({
            method: 'get',
            url: `https://epic.gsfc.nasa.gov/api/natural/images?api_key=${process.env.REACT_APP_NASA_KEY}`,
        })
        .then((response) => {
            setImgsArr(response.data)
        })
        .catch((error) => {
            console.log(error);
        });;
    }

    // Creates array of images with URLs
    const setImgsArr = (imageArr) => {
        let newImgArr = imageArr.map((imgData) => {
            let splitDate = imgData.date.split(' ')[0].split('-')
            let year = splitDate[0]
            let month = splitDate[1]
            let day = splitDate[2]

            let imgUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imgData.image}.jpg`
            console.log(imgUrl)

            imgData["url"] = imgUrl
            return imgData
        })
        setMetaImgData(newImgArr)
        setHasLoaded(true)
    }

    // Update the toasts array with the messages
    const onPostInteractionHandler = (message) => {
        setToastMsgs([...toastMsgs, message])
    }

    return (
        <div className="spacestagram-view-wrapper">
            {
                hasLoaded && imgMetaData ? (
                    <>
                    <div className="spacestagram-header">
                        <h1>SPACESTAGRAM</h1>
                        <img height="60" src={RocketIcon} alt="spacestagram main logo"/>
                    </div>
                    {imgMetaData.map((img) => {
                        return (
                            <SpacestagramCard onPostInteractionHandler={onPostInteractionHandler} key={img.identifier} imageData={img}/>
                        )
                    })}
                    </>
                )
                :
                <Loader/>
            }
            <ToastContainer style={{position:"fixed", bottom:"50px", right:"50px"}}>
                {
                    toastMsgs && toastMsgs.map((toastMsg, idx) => {
                        return (
                            <Toast key={idx}>
                                <Toast.Header>
                                    <strong className="me-auto">{toastMsg}</strong>
                                </Toast.Header>
                            </Toast>
                        )
                    })
                }
            </ToastContainer>
        </div>
    )
}

export default SpacestagramView;