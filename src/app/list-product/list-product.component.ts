import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts = [
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

}
