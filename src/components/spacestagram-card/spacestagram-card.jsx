import React from 'react'
import { Button, Card } from 'react-bootstrap'

import "./spacestagram-card.scss"

const SpacestagramCard = ({imageData}) => {
    console.log(imageData)
    return (
        <div className="spacestagram-card-wrapper">
            <Card>
                <Card.Body>
                <Card.Img variant="top" src={imageData.url}/>
                <Card.Text className="caption">
                    {imageData.caption}
                </Card.Text>
                <Card.Text className="date">
                    {imageData.date.split(' ')[0]}
                </Card.Text>
                <Button variant="success">Like</Button>
                </Card.Body>
            </Card>
        </div>
    )
    
}

export default SpacestagramCard;