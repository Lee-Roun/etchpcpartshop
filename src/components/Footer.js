import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';

const Styles = styled.div`
    section {
        position:relative;
        bottom:0px;
        width:100vw;
    }
`

export default class Footer extends Component {
    render() {
        return (
            <Styles>
                <section className="footer">
                    <Title title="Footer" />
                    <div className="services-center">
                        Hello Footer
                </div>
                </section>
            </Styles>

        )
    }
}