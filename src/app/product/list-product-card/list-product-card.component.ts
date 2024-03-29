import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // needed for routing from component
import { Product } from './product'; //interface is imported
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product-card',
  templateUrl: './list-product-card.component.html',
  styleUrls: ['./list-product-card.component.css']
})
export class ListProductCardComponent implements OnInit {

  cartProducts: Product[] = [];
  total: number = 0;
  allProducts: Product[] = [];

  // added for search string
  filteredProducts: Product[] = [];
  searchString = '';


  // allProducts: Product[] = [
  //   {
  //     id: 101,
  //     productImageUrl: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
  //     productName: 'Cake',
  //     productCost: 10,
  //     productDescription: 'A Delicious Cake.'
  //   },
  //   {
  //     id: 102,
  //     productImageUrl: 'https://images.unsplash.com/photo-1565333280022-580f5c6213dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
  //     productName: 'Oreo',
  //     productCost: 5,
  //     productDescription: 'Tasty chocolate biscuits'
  //   },
  //   {
  //     id: 103,
  //     productImageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  //     productName: 'Chips',
  //     productCost: 2,
  //     productDescription: 'Crispy Chips.' 
  //   }
  // ];
  
  //productService: ProductService | undefined;

  constructor(private productService: ProductService, private router: Router){
    //this.productService = productService;
    
  }

  ngOnInit(): void { 
    //this.allProducts = this.productService.getAllProducts();  

    this.productService.getAllProducts().subscribe((response) => {
      console.log(response);
      this.allProducts = response;
      //added for search string
      this.filteredProducts = this.allProducts;
    }, 
    (error) => {
      console.log(error);
    })
   }

  addToCart(product: Product){
    this.cartProducts.push(product);
    this.total = this.total + product.productCost;
  }

  removeFromCart(productId: number){
    for( var i = 0; i < this.cartProducts.length; i++){                                
      if ( this.cartProducts[i].id == productId) { 
          this.total = this.total - this.cartProducts[i].productCost;
          this.cartProducts.splice(i, 1); 
          break;
      }
    }
  }

  editProduct(productId: number){
    console.log(productId);
    //http://localhost:4200/edit-product/102

    this.router.navigate(['edit-product', productId]);
  }

  toAddProduct(){
    this.router.navigate(['add-product']);
  }

  filterProduct(){
    this.allProducts = this.filteredProducts.filter(
      (product: Product) => product.productName.toLocaleLowerCase().indexOf(this.searchString.toLocaleLowerCase()) != -1
    );
  }
  
}
