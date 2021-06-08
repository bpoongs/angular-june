import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../list-product-card/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl: string = 'http://localhost:3000/products';

 /*
  allProducts: Product[] = [
    {
      id: 101,
      productImageUrl: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      productName: 'Cake',
      productCost: 10,
      productDescription: 'A Delicious Cake.'
    },
    {
      id: 102,
      productImageUrl: 'https://images.unsplash.com/photo-1565333280022-580f5c6213dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      productName: 'Oreo',
      productCost: 5,
      productDescription: 'Tasty chocolate biscuits'
    },
    {
      id: 103,
      productImageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      productName: 'Chips',
      productCost: 2,
      productDescription: 'Crispy Chips.' 
    }
  ];
  */
  

  constructor(private http: HttpClient) { }

  getAllProducts(){
    //return this.allProducts;
    //this.http.get - fetch
    //this.http.put - update
    //this.http.post - insert
    //this.http.delete - delete
     return this.http.get<Product[]>(this.baseUrl);
  }

  addProduct(product: Product){
    product.id = 106;
    return this.http.post<Product>(this.baseUrl, product);
  }

  getProduct(productId: string){
    //http://localhost:3000/products/101
    return this.http.get<Product>(this.baseUrl+'/'+productId)
  }

  updateProduct(product: Product){
    //return this.http.put<Product>(this.baseUrl, product);
    
    // commented above line. We have to pass the product id in the 
    // url as in the below statement. Now update works.... 
    return this.http.put<Product>(this.baseUrl+'/'+product.id, product);
  }
}
