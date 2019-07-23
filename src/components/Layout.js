import React from 'react';
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    margin-top:68px;
    width: 60vw;
    margin: 0 auto;
    text-align: center;
`

export const Layout = (props) => (
    <Styles>
        <Container>
            {props.children}
        </Container>
    </Styles>
)
