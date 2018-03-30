import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css']
})
export class ExemplosComponent implements OnInit {
  itens = ['1', '2', '3', '4'];
  constructor() { }

  ngOnInit() {
  }

  exemplo(i: any): void {
    switch (i) {
      case 1: {
        
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
      case 4: {
        break;
      }
    }
  }
}
