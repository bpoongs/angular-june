import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../list-product-card/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: any;
  productName: string;
  productCost: number;
  productDescription: string;
  productImageUrl: string;

  editForm: FormGroup;

  //inject Router to navigate
  //inject ActivatedRoute to extract the route parameter which comes through the url
  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl(),
      productName: new FormControl(),
      productCost: new FormControl(),
      productDescription: new FormControl(),
      productImageUrl: new FormControl()
    });

    this.productId = this.activatedRoute.snapshot.paramMap.get('prodId');

    this.productService.getProduct(this.productId).subscribe((response) => {
      console.log(response);
      this.editForm.setValue(response); // sets the response to 
                                        // the form group in the template
    })
    console.log(this.productId);
  }

  updateProduct(){
    console.log(this.editForm.value);
    let product = this.editForm.value; // no changes here for updating 
                                      // check the product service class

    this.productService.updateProduct(product).subscribe((response) => {
        console.log(response);
        this.router.navigate(['list-product-card']);
    })

  }
  
  backToList(){
    this.router.navigate(['list-product-card']);
  }

}
