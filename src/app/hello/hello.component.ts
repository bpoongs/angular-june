import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
// string interpolation {{ }} - (one way binding)
// property binding [] - (one way binding)
// event binding ()
// two way property bindig [()]
  movieName = 'Avengers Endgame';
  displayMovie = '';
 
  constructor() { }

  ngOnInit(): void {
  }

  displayMovieName(){
    this.displayMovie='Matrix';
  }
}
