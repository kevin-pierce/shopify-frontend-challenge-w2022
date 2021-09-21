import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import SpacestagramCard from '../../components/spacestagram-card/spacestagram-card';
import Loader from '../../components/loader/loader';
import { Toast, ToastContainer } from "react-bootstrap"
import ScrollButton from '../../components/scroll-button/scroll-button';

// Assets + Styling
import RocketIcon from "../../assets/rocket-loader.svg"
import "./spacestagram-view.scss"

const SpacestagramView = () => {
    const [imgMetaData, setMetaImgData] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)               // Loading state for initial batch of images
    const [isLoadingMore, setIsLoadingMore] = useState(false)       // Loading state for lazy loading images
    const [toastMsgs, setToastMsgs] = useState([])
    const [daysAgoToLoad, setDaysAgoToLoad] = useState(2)

    // Initial data load
    useEffect(() => {    
        getEPICImgMetaData()
        
        // Add scroll event listener to trigger lazy loading for images from older dates
        window.addEventListener('scroll', () => {
            if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||isLoadingMore)
                return;
            setIsLoadingMore(true);
        })
    }, [])

    // Auto remove toast messages after 3 seconds
    useEffect(() => {
        if (toastMsgs.length > 0) {
            window.setTimeout(() => {
                setToastMsgs(toastMsgs => (toastMsgs.slice(1)))
            }, 3000)
        }
    }, [toastMsgs])

    // Load more upon scrolling down 
    useEffect(() => {
        if (isLoadingMore) {
            getEPICImgMetaData()
        }
    }, [isLoadingMore])

    // Makes request to NASA API
    const getEPICImgMetaData = async () => {
        let tempDate = new Date()
        tempDate.setDate(tempDate.getDate() - daysAgoToLoad)
        let queryDate = String(tempDate.toISOString().slice(0, 10))

        await axios({
            method: 'get',
            url: `https://api.nasa.gov/EPIC/api/natural/date/${queryDate}?api_key=${process.env.REACT_APP_NASA_KEY}`,
        })
        .then((response) => {
            setImgsArr(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Creates array of images with src URLs
    const setImgsArr = (imageArr) => {
        let newImgArr = imageArr.map((imgData) => {
            let splitDate = imgData.date.split(' ')[0].split('-')
            let year = splitDate[0]
            let month = splitDate[1]
            let day = splitDate[2]

            let imgUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imgData.image}.jpg`

            imgData["url"] = imgUrl
            return imgData
        })
        setMetaImgData(state => [...state, ...newImgArr])
        setHasLoaded(true)                                      // Initial load state
        setDaysAgoToLoad(daysAgoToLoad + 1)                     // Increase gap in days
        setIsLoadingMore(false)                                 // Lazy loading is set to false
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
                    <div className="spacestagram-cards-holder">

                    
                        {imgMetaData.map((img) => {
                            return (
                                <SpacestagramCard onPostInteractionHandler={onPostInteractionHandler} key={img.identifier} imageData={img}/>
                            )
                        })}
                    </div>
                    </>
                )
                :
                <Loader/>
            }
            {
                isLoadingMore ? 
                    <Loader showMsg={false}/>
                    :
                    <></>
            }
            <ToastContainer style={{position:"fixed", bottom:"36px", right:"108px"}}>
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
            <ScrollButton/>
        </div>
    )
}

export default SpacestagramView;