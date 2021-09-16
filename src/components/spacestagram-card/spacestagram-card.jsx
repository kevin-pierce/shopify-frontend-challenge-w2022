import React, { useState } from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'

import LinkIcon from "../../assets/link-icon.svg"
import LikedIcon from "../../assets/heart-full-icon.svg"
import UnlikedIcon from "../../assets/heart-empty-icon.svg"

import "./spacestagram-card.scss"


const SpacestagramCard = ({imageData}) => {

    const [likedState, setLikedState] = useState(false)

    const handleLike = () => {
        setLikedState(!likedState)
    }

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(`${imageData.url}`)
    }

    console.log(imageData)
    return (
        <div className="spacestagram-card-wrapper">
            <Card>
                <Card.Body>
                <Card.Img variant="top" src={imageData.url}/>
                <div className="interactions-row">
                    <Button onClick={handleLike} variant="none">
                        {
                            likedState ? 
                            (<img src={LikedIcon}/>) 
                            : 
                            (<img src={UnlikedIcon}/>)
                        }
                        
                    </Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="none">
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