import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eds',
  templateUrl: './eds.component.html',
  styleUrls: ['../home/home.component.css']
})
export class EdsComponent implements OnInit {
  itens = [1];
  metodos = ['Extensão Mínima', 'Percurso Mínimo', 'Fluxo Máximo', 'Caxeiro'];
  distance: number[][] = [];
  constructor() { }

  ngOnInit() {
    this.distance[0] = [Infinity, 20, 30, 10, Infinity];
    this.distance[1] = [Infinity, Infinity, 40, Infinity, 30];
    this.distance[2] = [Infinity, Infinity, Infinity, 10, 20];
    this.distance[3] = [Infinity, Infinity, 5, Infinity, 20];
    this.distance[4] = [Infinity, Infinity, Infinity, Infinity, Infinity];
  }

}
