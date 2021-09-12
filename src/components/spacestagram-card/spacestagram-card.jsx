import React from 'react'
import { Card } from 'react-bootstrap'

const SpacestagramCard = ({imageData}) => {
    console.log(imageData)
    return (
        <>
            <Card>
                <Card.Body>
                <Card.Img variant="top" src={imageData.url} width="500" height="500"/>
                <Card.Text>
                    {imageData.caption}
                </Card.Text>
                <Card.Text>
                    {imageData.date.split(' ')[0]}
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
    
}

export default SpacestagramCard;