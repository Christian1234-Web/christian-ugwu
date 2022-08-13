import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { GET_CATEGORY } from '../../queries/queries';
import Navbar from './Navbar';


export class NavbarIndex extends Component {
    render() {
        if (this.props.data.loading) {
            return (
                <div>Loading....</div>
            )
        } else {
            var data = this.props.data.categories;

            var currency = this.props.data.categories[0].products[0].prices;
            return (
                <>

                    <Navbar
                        data={data}
                        currency={currency}
                    />
                </>
            )
        }
    }
}

export default graphql(GET_CATEGORY)(NavbarIndex);
