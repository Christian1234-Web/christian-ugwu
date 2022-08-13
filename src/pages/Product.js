import React, { Component } from 'react'
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import ProductDescription from '../components/ProductDescription';
import withRouter from '../components/Router/WithRouter';
import Navbar from '../components/Navbar/index';

const GET_PRODUCT = gql`
query GetProduct($id: String!){
    product(id:$id){
      id
        name
        category
        gallery
        inStock
        description
        attributes{
          name
          type
          items{
            displayValue
            value
          }
          
        }
        prices{
          amount
          currency{
            label
            symbol
          }
        }
        brand
    }
  }
` ;


class Product extends Component {


  render() {
    let data = this.props.data;

    if (data.loading) {
      return (
        <div>Loading.....</div>
      )
    } else {
      return (
        <div>
          <Navbar />
          <ProductDescription
            data={data}
          />
        </div>
      )
    }

  }
}

export default withRouter(graphql(GET_PRODUCT, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
}
)(Product));
// export default graphql(GET_PRODUCT)(Product); 