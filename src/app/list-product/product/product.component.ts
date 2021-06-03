import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productData: any;
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(productId: any){
    console.log(productId);
    this.deleteEvent.emit(productId);
  }
}
