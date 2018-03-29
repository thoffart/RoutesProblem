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

}
