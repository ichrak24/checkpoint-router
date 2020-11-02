import React from 'react'
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";


function Description({title,trailerSrc,description}) {
  
    return (
        <div>
            <Card className="text-center">
              <label>Title :</label>
  <Card.Header>{title}</Card.Header>
  <Card.Body>
  <label>Description  :</label>i
    <Card.Title>{description}</Card.Title>
    <Card.Text>
    <label>Video :</label>
    <iframe  width="560" height="315" 
    src={trailerSrc} frameborder="0" allow="accelerometer; autoplay;
     clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    </Card.Text>
    <Link to="/MovieList"> <Button variant="primary">Go Home</Button></Link>
  </Card.Body>

</Card>
        </div>
    )
}

export default Description;
