import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts: Product[] = [
    {
      productId: 101,
      productName: 'Cakes',
      productCost: 10,
      productDescription: 'Delicius cakes!!',
      productImageUrl: ''
    },
    {
      productId: 102,
      productName: 'Cookies',
      productCost: 7,
      productDescription: 'Yummy Cookies!!',
      productImageUrl: ''
    },
    {
      productId: 103,
      productName: 'Chips',
      productCost: 5,
      productDescription: 'Crispy Chips!!',
      productImageUrl: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteProductParent(data: any){
    console.log(data);
    for(let i=0; i<this.allProducts.length; i++){
      if(this.allProducts[i].productId==data){
        this.allProducts.splice(i, 1);
        break;
      }
    }
  }
}
