import { gql } from '@apollo/client';


export const GET_CATEGORY = gql`
query GetCategory{
    categories {
        name
        products{
            id
            name
            category
            gallery
            inStock
            description
            attributes{
              name
              items{
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
}
`;
