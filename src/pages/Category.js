import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import Navbar from '../components/Navbar/index';
import ProductListing from '../components/ProductListing';
import { GET_CATEGORY } from "../queries/queries"



class Category extends Component {




  render() {
    if (this.props.data.loading) {
      return (
        <div> </div>
      )
    } else {
      return (
        <div className='category-container'>
          <Navbar
          />
          <ProductListing
            data={this.props.data}

          />
        </div>

      )
    }

  }
}

export default graphql(GET_CATEGORY)(Category)