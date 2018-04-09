import { MethodsService } from './../sharedservices/methods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eds',
  templateUrl: './eds.component.html',
  styleUrls: ['../home/home.component.css']
})
export class EdsComponent implements OnInit {
  calculado = [false, false, false, false];
  itens = [1, 2, 3, 4];
  metodos = ['Extensão Mínima', 'Percurso Mínimo', 'Fluxo Máximo', 'Caxeiro'];
  resultadofm: number[][] = [];
  resultados: string[][] = [];
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
      [9000000000,   18, 1000,   32, 9000000000, 9000000000],
      [  18, 9000000000,   12,   28, 9000000000, 9000000000],
      [9000000000,   12, 9000000000,   17, 9000000000,   32],
      [  32,   28,   17, 9000000000,    4,   12],
      [9000000000, 9000000000, 9000000000,    4, 9000000000,   11],
      [9000000000, 9000000000,   32,   17,   11, 9000000000]
    ],
    [
      [Infinity, 20, 30, 10, Infinity],
      [Infinity, Infinity, 40, Infinity, 30],
      [Infinity, Infinity, Infinity, 10, 20],
      [Infinity, Infinity, 5, Infinity, 20],
      [Infinity, Infinity, Infinity, Infinity, Infinity]
    ],
    [
      [1000, 65, 53, 37],
      [65, 1000, 95, 1000],
      [53, 95, 1000, 81],
      [37, 1000, 81, 1000],
    ]
  ];
  constructor(private methodsservice: MethodsService) { }

  ngOnInit() {

  }


  calculametodo(i: any) {
    switch (i) {
      case 0: {
        this.methodsservice.resolveextmin();
        this.resultados[i] = this.methodsservice.sendrede();
        console.log('eds resultado 0: ' + this.resultados[i] );
        this.calculado[i] = true;
        break;
      }
      case 1: {
        this.methodsservice.resolvepercmin();
        this.resultados[i] = this.methodsservice.sendrede();
        this.calculado[i] = true;
        break;
      }
      case 2: {
        this.resultadofm = this.methodsservice.fluxomaximo();
        this.calculado[i] = true;
        break;
      }
      case 3: {
        this.methodsservice.resolvecaxeiro();
        this.resultados[i] = this.methodsservice.sendrede();
        console.log(this.resultados[i]);
        this.calculado[i] = true;
        break;
      }
    }
  }
}
