import React from "react";
import {Container,Col, Row, Image} from "react-bootstrap";
import {Header,CarouselComponent,HomeCard} from "../../components";
import FaceBook from "../../assets/facebook.svg";
import Insta from "../../assets/insta.svg";
const HomeContainer = () => {
    return (
        <Container fluid="true" className="p-0">
        <Col className="header-col">
        <Row>
        <Header />
        </Row>
        <Row>
        <div className="carousel-item">
            <CarouselComponent />
        </div>
        </Row>
        <Row>
        <div className="welcome-text">
            Welcome to The F's Company
        </div>
        <div className="description-text">
        <span className="description-span">
        The F's Company rejuvenates the Indo-Western slice of eatery, combining immense inspiration from classic Americana and inventive modern flair. With influences ranging from way before 90's to mesmerizing dining days of now. You will find nostalgic collection of comforts, classics and curiosities with a modern punch.
        <br/>
        Either Visit or get to your doorstep and have a pinch of exotic taste on your tongue.
        
        </span>
        
        </div>
        </Row>
        <Row style={{padding:"0"}} className="gx-0 " >
            <div className="home-order-cards">
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            </div>
        </Row>
        <Row>
                    <Image
                        fluid
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPmKOFdZCIJQpCdANIeiowF1jhJJ3hFrIddCKdmzK3nJUWpojMgAKoM0zoDRb5N5X3w&usqp=CAU"
                        alt="Second slide"
                        className="footer-above-image"
                    />
        </Row>
        <Row>
            <div className="follow-us">
                <span className="text-follow">Follow us on</span>
                <div className="follow-icons-container">
                    <Image 
                    fluid
                    src={FaceBook}
                    alt={FaceBook}
                    className="follow-icons"
                    />
                    <Image 
                    fluid
                    src={Insta}
                    alt={Insta}
                    className="follow-icons"
                    />
                </div>
            </div>
        </Row>
        <Row>
            <div className="footer">
                <span className="footer-text">&copy; The F's Company</span>
            </div>
        </Row>
        </Col>
        </Container>
        
    )
};

export default HomeContainer;