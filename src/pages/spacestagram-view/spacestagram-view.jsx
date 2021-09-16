import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "./spacestagram-view.scss"

import SpacestagramCard from '../../components/spacestagram-card/spacestagram-card';

const SpacestagramView = () => {
    const [imgMetaData, setMetaImgData] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(() => {
        getEPICImgMetaData()
    }, [])

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

    return (
        <div className="spacestagram-view-wrapper">
            {
                hasLoaded && imgMetaData ? 
                imgMetaData.map((img) => {
                    return (
                        <SpacestagramCard key={img.identifier} imageData={img}/>
                    )
                }) 
                :
                <img className="loader" src="https://www.freeiconspng.com/uploads/rocket-ship-png-1.png" width="100" alt="Loading Icon" />
            }
        </div>
    )
}

export default SpacestagramView;