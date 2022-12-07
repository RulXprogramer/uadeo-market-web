import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

export const GET_PRODUCTS = gql`
  query listProducts{
    products{
      _id
      name
      description
      price
      count
      type
      createdAt
      user{
        name
        surname
        nametag
        location
        contact
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apollo: Apollo, private http: HttpClient) { }

  list(){
    return this.apollo.query<any>({
      query: GET_PRODUCTS
    });
  }
}
