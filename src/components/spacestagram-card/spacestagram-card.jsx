import React, { useState, useEffect } from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'
import InnerImageZoom from 'react-inner-image-zoom';

// Icons
import LinkIcon from "../../assets/link-icon.svg"
import LikedIcon from "../../assets/heart-full-icon.svg"
import UnlikedIcon from "../../assets/heart-empty-icon.svg"

import "./spacestagram-card.scss"
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


const SpacestagramCard = ({imageData, onPostInteractionHandler}) => {
    const [likedState, setLikedState] = useState(false)

    // Load liked images from localStorage
    useEffect(() => {
        const allLikedPosts = JSON.parse(window.localStorage.getItem("likedPosts"))
        let imgLikedState = allLikedPosts.find(post => post.identifier == imageData.identifier)

        if (imgLikedState && imgLikedState.liked == true) {
            setLikedState(true)
        }
    }, [])

    // onClick handler for likes (Only stores liked images)
    const handleLike = () => {

        // Liking an image (add to local storage arr)
        if (!likedState) {
            let allLikedPosts = JSON.parse(window.localStorage.getItem("likedPosts"))
            allLikedPosts.push({identifier: imageData.identifier, liked: !likedState})
            window.localStorage.setItem("likedPosts", JSON.stringify(allLikedPosts))
            onPostInteractionHandler("Liked post")
        }

        // Unliking an image (remove from local storage arr)
        else {
            let allLikedPosts = JSON.parse(window.localStorage.getItem("likedPosts"))
            allLikedPosts = allLikedPosts.filter(post => post.identifier != imageData.identifier)
            window.localStorage.setItem("likedPosts", JSON.stringify(allLikedPosts))
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
                    <InnerImageZoom 
                        src={imageData.url} 
                        zoomSrc={imageData.url} 
                        alt="Photo of Earth taken by NASA's EPIC camera"
                        zoomType="hover"
                        zoomScale={1.25}
                        width={566}
                        height={566}
                    />
                    <div className="interactions-row">
                        <Button aria-label="Like button" onClick={handleLike} variant="none" className="like-btn">
                            {
                                likedState == true ? 
                                (<img alt="Liked post icon"src={LikedIcon}/>) 
                                : 
                                (<img alt="Unliked post icon" src={UnlikedIcon}/>)
                            }  
                        </Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" aria-label="Share button" className="share-btn">
                                <img width="32" alt="Ei-share-apple" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/512px-Ei-share-apple.svg.png"></img>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item aria-label="Copy link" onClick={copyToClipboard}>
                                    <div className="share-dropdown-content">
                                        <div>
                                            <img width="16" alt="Link icon" src={LinkIcon}/>
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