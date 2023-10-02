
import { request, gql } from 'graphql-request';

const MASTER_URL =  'https://api-sa-east-1.hygraph.com/v2/cln1ypzcd0vbf01t9gum77m0c/master';

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
      carDoor
      fueltype
      year
      
      image {
        url
      }
      carBrand
    }
    
  }
  
  `
  const result = await request(MASTER_URL,query);
  return result;
} 

export const getStoreLocations= async ()=>{
  const query=gql`
  query storeLocation {
    storesLocations {
      address
    }
  }  
  `;
  const result = await request(MASTER_URL,query);
  return result;
}


