import React, { Component } from 'react'

const ProductProvider = React.createContext();

/*
*
* Provider
* Cunsumer
*
*/

class ProductProvider extends Component {
    render() {
        return (
            <div>
                <ProductProvider.Provider value="hello from context">
                    {this.props.children}
                </ProductProvider.Provider>
            </div>
        )
    }
}
