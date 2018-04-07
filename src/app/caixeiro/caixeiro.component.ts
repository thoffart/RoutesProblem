import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixeiro',
  templateUrl: './caixeiro.component.html',
  styleUrls: ['./caixeiro.component.css']
})
export class CaixeiroComponent implements OnInit {

  x: number[][] = [];
  y: number[][] = [];
  z: number[][] = [];
  w: number[] = [];
  estado: string[] = [];

  moment(matrix) {
    var aux = matrix.map(function(arr) {
      return arr.slice();
    });

    return aux;

  }
  metodo(matrix) {
    this.x = matrix;

    this.x = this.subtraiLinhas(matrix);
    this.y = this.moment(matrix);


    this.x = this.subtraiColunas(matrix);

    let obj = [];



    obj = this.encontraZeros(matrix);

    let posCol = obj.pop();
    let posLin = obj.pop();


    matrix.splice(posLin,1);

    for (let i in matrix) {
      matrix[i].splice(posCol,1);
    }




    this.encontraZeros(matrix);

    posCol = obj.pop();
    posLin = obj.pop();

    matrix.splice(posLin,1);

    for (let i in matrix) {
      matrix[i].splice(posCol,1);
    }

  }

  subtraiLinhas(matrix) {
    let minLin: number[] = [];

    //pega os menores valores de todas as linhas
    for (const j in matrix) {
      const w = matrix[j];
      for ( let i=0; i<w.length; i++) {
        if(w[i]==0)
          w.splice(i,1);
      } 
      minLin.push(Math.min(...w));
    }

    //subtrai os valores de minLin nas colunas da matriz
    for (const i in matrix) {
      for (const j in matrix[i]) {
        if (matrix[i][j] == 0 )
          continue;
        else
          matrix[i][j] -= minLin[i]
      }
    }
    return matrix;
  }

  subtraiColunas(matrix) {
    let minCol: number[] = [];
    let aux: number[] = [];

    //encontra os menores valores de todas as colunas
    //aloca esses valores em minCol
    for (const j in matrix) {
      for (const i in matrix[j]) {
        aux.push(matrix[i][j]);
      }
      minCol.push(Math.min(...aux));
      aux = [];
    }
    //subtrai da matriz
    for (const j in matrix) {
      for (const i in matrix[j]) {
        if(matrix[i][j]==0)
          continue;
        else
          matrix[i][j] -= minCol[j];
      }
    }

    return matrix;

  }

  caminho(matrix,posLin,posCol,zeroLin,zeroCol){
    var aux = matrix.map(function(arr) {
      return arr.slice();
    });

    for (let i of matrix) {

    }
  }

  contaZeros(matrix) {
    let contLin: number = 1000;
    let contCol: number = 1000;
    let posLin: number = 0;
    let posCol: number = 0;

    //declara as variáveis que contam o número de zeros nas linhas e colunas
    let zeroLin: number[] = [];
    for (const i in matrix) {
      zeroLin[i] = 0;
    }

    let zeroCol: number[] = [];
    for(const j in matrix[0]) {
      zeroCol[j] = 0;
    }

    //encontra a quantidade de zeros nas colunas e linhas
    for (const i in matrix) {
      for (const j in matrix[i]) {
        if (matrix[i][j]==0) {
          return false;
        }
      }
    }

    return true;
  }

  encontraZeros(matrix) {
    let contLin: number = 1000;
    let contCol: number = 1000;
    let posLin: number = 0;
    let posCol: number = 0;

    //declara as variáveis que contam o número de zeros nas linhas e colunas
    let zeroLin: number[] = [];
    for (const i in matrix) {
      zeroLin[i] = 0;
    }

    let zeroCol: number[] = [];
    for(const j in matrix[0]) {
      zeroCol[j] = 0;
    }

    //encontra a quantidade de zeros nas colunas e linhas
    for (const i in matrix) {
      for (const j in matrix[i]) {
        if (matrix[i][j]==0) {
          zeroLin[i] += 1;
          zeroCol[j] += 1;
        }
      }
    }

    //encontra a coluna e linha com menor número de zeros
    for (let i=0; i<zeroLin.length; i++) {
      if (contLin > zeroLin[i]) {
        contLin = zeroLin[i];
        posLin = i;
      }
    }

    for (let i=0; i<zeroCol.length; i++) {
      if(matrix[posLin][i]==0) {
        posCol = i;
      }
    }

    //this.caminho(matrix,posLin,posCol,zeroLin,zeroCol);

    let obj = [];
    obj.push(posLin, posCol);

    return obj;

  }

  constructor() {
    //exemplo do caderno
    let matrix: number[][] = [];

    matrix = [[1000, 65, 53, 37], [65, 1000, 95, 1000],
              [53, 95, 1000, 81], [37, 1000, 81, 1000]];


    this.z = this.moment(matrix);
          

    this.metodo(matrix);
  }

  ngOnInit() {
  }

}
