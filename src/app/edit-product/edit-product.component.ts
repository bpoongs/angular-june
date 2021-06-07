import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: any;
  //inject Router to navigate
  //inject ActivatedRoute to extract the route parameter which comes through the url
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('prodId');
    console.log(this.productId);
  }

  backToList(){
    this.router.navigate(['list-product-card']);
  }

}
