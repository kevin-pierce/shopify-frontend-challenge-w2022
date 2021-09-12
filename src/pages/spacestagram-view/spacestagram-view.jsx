import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SpacestagramCard from '../../components/spacestagram-card/spacestagram-card';

const SpacestagramView = () => {
    const [imgData, setImgData] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(() => {
        getEPICImgs()
    }, [])

    const getEPICImgs = () => {
        axios({
            method: 'get',
            url: `https://epic.gsfc.nasa.gov/api/natural/images?api_key=${process.env.REACT_APP_NASA_KEY}`,
        })
        .then((response) => {
            console.log(response)
            setImgData(response.data)
            setHasLoaded(true)
        })
        .catch((error) => {
            console.log(error);
        });;
    }

    return (
        <div className="lol">
            {
                hasLoaded && imgData.map((img) => {
                    return (
                        <SpacestagramCard image={img}/>
                    )
                    
                })
            }
        </div>
    )
}

export default SpacestagramView;