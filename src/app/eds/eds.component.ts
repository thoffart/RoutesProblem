import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eds',
  templateUrl: './eds.component.html',
  styleUrls: ['../home/home.component.css']
})
export class EdsComponent implements OnInit {
  itens = [1, 2, 3, 4];
  metodos = ['Extensão Mínima', 'Percurso Mínimo', 'Fluxo Máximo', 'Caxeiro'];
  distance: number[][][] = [
    [
      [1000,     2,   4,   1,    10,   1000,   1000],
      [    2, 1000, 1000,   1,   1000,  1000,   1000],
      [    4, 1000,1000,   4,   1000,  1000,      3],
      [    1,    1,   4,1000,      7,    10,      7],
      [   10, 1000,1000,   7,   1000,     8,      5],
      [ 1000, 1000,1000,  10,      8,  1000,      3],
      [ 1000, 1000,   3,   7,      5,     3,   1000]
    ],
    [
      [1000,   18, 1000,   32, 1000, 1000],
      [  18, 1000,   12,   28, 1000, 1000],
      [1000,   12, 1000,   17, 1000,   32],
      [  32,   28,   17, 1000,    4,   12],
      [1000, 1000, 1000,    4, 1000,   11],
      [1000, 1000,   32,   17,   11, 1000]
    ],
    [
      [Infinity, 20, 30, 10, Infinity],
      [Infinity, Infinity, 40, Infinity, 30],
      [Infinity, Infinity, Infinity, 10, 20],
      [Infinity, Infinity, 5, Infinity, 20],
      [Infinity, Infinity, Infinity, Infinity, Infinity]
    ],
    [
      [1000,     2,   4,   1,    10,   1000,   1000],
      [    2, 1000, 1000,   1,   1000,  1000,   1000],
      [    4, 1000,1000,   4,   1000,  1000,      3],
      [    1,    1,   4,1000,      7,    10,      7],
      [   10, 1000,1000,   7,   1000,     8,      5],
      [ 1000, 1000,1000,  10,      8,  1000,      3],
      [ 1000, 1000,   3,   7,      5,     3,   1000]
    ]
  ];
  constructor() { }

  ngOnInit() {
  }

}
