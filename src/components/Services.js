import React, { Component } from 'react';
import { FaDesktop, FaBoxOpen, FaCartPlus, FaCoins } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaDesktop/>,
                title:"Sell PC Part",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corpoeis!"
            },
            {
                icon:<FaBoxOpen/>,
                title:"P2P Market",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corpoeis!"
            },
            {
                icon:<FaCartPlus/>,
                title:"Modern Cart Basket",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corpoeis!"
            },
            {
                icon:<FaCoins/>,
                title:"Reasonable price",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corpoeis!"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
