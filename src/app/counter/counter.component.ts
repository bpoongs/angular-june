import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter=0;

  constructor() { }

  ngOnInit(): void {
  }

  decrementCounter(){
    this.counter = this.counter - 1;
  }

  incrementCounter(){
    this.counter = +this.counter + 1;
  }
}
