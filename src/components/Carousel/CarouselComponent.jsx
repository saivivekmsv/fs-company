import React from "react";
import {Carousel, Image} from "react-bootstrap";

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <Image
                    fluid
                    src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg"
                    alt="First slide"
                    className="carousel-image"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    fluid
                    src="https://thumbs.dreamstime.com/b/large-pizza-wooden-table-restaurant-65051203.jpg"
                    alt="Second slide"
                    className="carousel-image"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    fluid
                    src="https://media.istockphoto.com/photos/pepperoni-pizza-on-wooden-serving-board-picture-id1141017409?k=20&m=1141017409&s=612x612&w=0&h=MszrLqrQSLNZz3cFL5QpOAZ8GLuZHy1gcPbolUZcb2I="
                    alt="Third slide"
                    className="carousel-image"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default CarouselComponent;