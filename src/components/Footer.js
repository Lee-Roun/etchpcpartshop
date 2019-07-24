import React, { Component } from 'react';
import Title from './Title';

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <Title title="Footer" />
                <div className="services-center">
                    Hello Footer
                </div>
            </section>
        )
    }
}