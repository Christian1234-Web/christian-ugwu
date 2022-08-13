import React, { Component } from 'react'
import Navbar from '../components/Navbar/index';
import CartItems from '../components/CartItems';



class Cart extends Component {



    render() {
        return (
            <>
                <Navbar />
                <CartItems/>
            </>
        )
    }
}

export default Cart;