import React, { useState, useEffect } from 'react'
import { Button, Card, Dropdown, Toast, ToastContainer } from 'react-bootstrap'

// Icons
import LinkIcon from "../../assets/link-icon.svg"
import LikedIcon from "../../assets/heart-full-icon.svg"
import UnlikedIcon from "../../assets/heart-empty-icon.svg"

import "./spacestagram-card.scss"


const SpacestagramCard = ({imageData, onPostInteractionHandler}) => {
    const [likedState, setLikedState] = useState(false)

    // Load liked images from localStorage
    useEffect(() => {
        const imgLikedState = window.localStorage.getItem(`${imageData.identifier}-liked-state`)

        if (imgLikedState != null) {
            if (imgLikedState == "true") {
                console.log(imgLikedState)
                setLikedState(true)
            }
        }
    }, [])

    // onClick handler for likes (Only stores liked images)
    const handleLike = () => {
        if (!likedState) {
            window.localStorage.setItem(`${imageData.identifier}-liked-state`, !likedState)
            onPostInteractionHandler("Liked post")
        }
        else {
            window.localStorage.removeItem(`${imageData.identifier}-liked-state`)
            onPostInteractionHandler("Unliked post")
        }
        setLikedState(!likedState)
    }

    // Save image link to clipboard
    const copyToClipboard = (e) => {
        onPostInteractionHandler("Link copied to clipboard")
        navigator.clipboard.writeText(`${imageData.url}`)
    }

    return (
        <div className="spacestagram-card-wrapper">
            <Card>
                <Card.Body>
                <Card.Img variant="top" src={imageData.url}/>
                <div className="interactions-row">
                    <Button onClick={handleLike} variant="none" className="like-btn">
                        {
                            likedState == true ? 
                            (<img src={LikedIcon}/>) 
                            : 
                            (<img src={UnlikedIcon}/>)
                        }
                        
                    </Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="none" className="share-btn">
                            <img width="32" alt="Ei-share-apple" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/512px-Ei-share-apple.svg.png"></img>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={copyToClipboard}>
                                <div className="share-dropdown-content">
                                    <div>
                                        <img width="16" alt="link icon" src={LinkIcon}/>
                                        Copy link to Image
                                    </div>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                

                <Card.Text className="caption">
                    {imageData.caption}
                </Card.Text>
                <Card.Text className="date">
                    {imageData.date.split(' ')[0]}
                </Card.Text>
                
                </Card.Body>
            </Card>
        </div>
    )
}

export default SpacestagramCard;