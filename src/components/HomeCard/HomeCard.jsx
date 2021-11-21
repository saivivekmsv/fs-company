import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Restaurant from "../../assets/restaurant.jpg";
const HomeCard = (props) => {
    return (
        <Card style={{width:"15rem"}} className="text-center">
            <Card.Img variant="top" src={Restaurant}/>
            <Card.Body style={{padding:"0"}}>
                
                <div className="card-body-styles">
                    <span className="card-title-style">F's Restaurant</span>
                    <div className="lets-order-button">Let's Order</div>
                </div>
                
                
                
            </Card.Body>
            
        </Card>
    )
};

export default HomeCard;

