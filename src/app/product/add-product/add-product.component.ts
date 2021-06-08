import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  productName: string;
  productDescription: string;
  productCost: number;
  productImageUrl: string;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(productForm: NgForm){
    console.log(productForm);

    let product = {
      id: 0,
      productName: this.productName,
      productCost: this.productCost,
      productDescription: this.productDescription,
      productImageUrl: this.productImageUrl
    }

    this.productService.addProduct(product).subscribe((response) => {
      console.log(response);
      // right place to navigate
      this.router.navigate(['list-product-card']);
    })

    // code here continues its execution
    // not the right place to navigate

  }
}
