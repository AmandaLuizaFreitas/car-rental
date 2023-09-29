
import { request, gql } from 'graphql-request';

export const getCarsList = async()=>{

  const query = gql`
  query CarLists {
    carLists {
      carAvg
      createdAt
      id
      name
      price
      publishedAt
      updatedAt
      model
      carType
      image {
        url
      }
      carBrand
    }
  }
  
  `
  const result = await request('https://api-sa-east-1.hygraph.com/v2/cln1ypzcd0vbf01t9gum77m0c/master',query);
  return result;
} 