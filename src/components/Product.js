import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>Hello from Product</h3>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="../assets/images/coffee.jpg" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="../images/coffee.jpg" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="../images/coffee.jpg" rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}