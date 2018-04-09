import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixeiro',
  templateUrl: './caixeiro.component.html',
  styleUrls: ['./caixeiro.component.css']
})
export class CaixeiroComponent implements OnInit {

  x: number[][] = [];
  testeMatrix1: number[][] = [];
  testeMatrix2: number[][] = [];
  testeArray1: number[] = [];
  testeVar1;
  estado: string[] = [];
  rota = [];

  pos: number[][] = [];
  cortes: number[] =[];

  moment(matrix) {
    var aux = matrix.map(function(arr) {
      return arr.slice();
    });
    return aux;
  }

  zeroM(matrix) {
    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix.length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  metodo(matrix) {
    this.x = matrix;

    let original = this.moment(matrix);

    this.pos = this.moment(matrix);

    this.zeroM(this.pos);

    matrix = this.subtraiLinhas(matrix);
    matrix = this.subtraiColunas(matrix);

    let matrixCorte = this.moment(matrix);
    let matrixPos = this.moment(matrix);

    while (this.existeZero(matrixCorte))
      this.encontraZeros(matrixCorte, matrixPos);

    this.subtraiMinimo(matrix,matrixCorte);

    matrixCorte = this.moment(matrix);
    matrixPos = this.moment(matrix);

    this.cortes = [];

    while(this.existeZero(matrixCorte))
      this.encontraZeros(matrixCorte,matrixPos)

    if (this.cortes.length == original.length) {
      this.testaRotas(matrix);
    }

    this.testeMatrix1 = matrixCorte;
  }

  contaZeros(matrix) {
    let auxLin: number = 0;
    let auxCol: number = 0;
    let posLin: number = 0;
    let posCol: number = 0;
    let contaLin: number[] = [];
    let contaCol: number[] = [];
    
    //inicializa as variáveis que contam o número de zeros nas linhas e colunas
    for (const i in matrix) {
      contaLin[i] = 0;
    }
    for(const j in matrix[0]) {
      contaCol[j] = 0;
    }

    //encontra a quantidade de zeros nas colunas e linhas
    for (const i in matrix) {
      for (const j in matrix[i]) {
        if (matrix[i][j]==0) {
          contaLin[i] += 1;
          contaCol[j] += 1;
        }
      }
    }

    let obj = [];
    obj.push(contaLin,contaCol);

    return obj;
  }

  testaPassado(n, passado) {
    for (let i=0; i<passado.length; i++) {
      if (n == passado[i])
        return false;
    }
    return true;
  }

  testaRotas (matrix) {
    this.testeMatrix2 = matrix;

    let obj = this.contaZeros(matrix);
    let contaCol = obj.pop();
    let contaLin = obj.pop();

    let minArr = [];
    let minL;
    let destino;
    let aux=Infinity;
    let passado = [];
    let caminho: number[][] = [];

    aux=Infinity;
    for (let i=0;i<contaLin.length;i++){
      if (aux > contaLin[i]) {
        aux = contaLin[i];
        minL = i;
      }
    }
    contaLin[minL] = Infinity;
    passado.push(minL);

    for (let i=0; i<contaLin.length; i++) {
      if(matrix[minL][i]==0 && this.testaPassado(i,passado)){
        destino = i;
      }
    }
    
    passado.push(destino);
    caminho.push([minL,destino]);

    while(passado.length<matrix.length) {
      aux = destino;
      for (let i=0; i<contaLin.length; i++) {
        if(matrix[destino][i]==0 && this.testaPassado(i,passado)){
          destino = i;
        }
      }
      
      passado.push(destino);  
      caminho.push([aux,destino]);

    }

    let rede:string[] = [];
    for (let i=0;i<caminho.length;i++){
      rede[i] = String(caminho[i][0]) + ' ' + String(caminho[i][1]);
    }
    console.log(rede);

    this.testeMatrix2 = caminho;

    this.cortes = passado;



  }

  subtraiMinimo(matrix, matrixCorte) {
    let minArr = [];
    let min;

    //encontra o valor mínimo da matrix
    for (let i=0; i<matrixCorte.length; i++) {
      minArr.push(Math.min(...matrixCorte[i]))
    }
    min = Math.min(...minArr);

    //soma o mínimo em valores cruzados duas vezes, subtrai nos valores que não foram cruzados nenhuma vez
    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[0].length; j++) {
        if (this.pos[i][j]==2 && matrix[i][j]!=0)
          matrix[i][j]+=min;
        else if(this.pos[i][j]==0 && matrix[i][j]!=0)
          matrix[i][j]-=min;
      }
    }

  }

  existeZero(matrix) {
    for (const i in matrix) {
      for (const j in matrix[i]) {
        if (matrix[i][j]==0) {
          return true;
        }
      }
    }
    return false;

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

  encontraZeros(matrixCorte, matrixPos ) {
    let auxLin: number = 0;
    let auxCol: number = 0;
    let posLin: number = 0;
    let posCol: number = 0;
    let aux = [];
    let auxPos;

    let obj = this.contaZeros(matrixCorte);
    let contaCol = obj.pop();
    let contaLin = obj.pop();

    //encontra a linha que contém maior número de zeros
    for (let i=0; i<contaLin.length; i++) {
      if (auxLin < contaLin[i] && contaLin[i]>0) {
        auxLin = contaLin[i];
        posLin = i;
      }
    }
    //encontra a coluna que contém maior número de zeros 
    for (let i=0; i<contaCol.length; i++) {
      if (auxCol < contaCol[i] && contaCol[i]>0) {
        auxCol = contaCol[i];
        posCol = i;
      }
    }

    if(auxLin > auxCol) {      
      //laço que coloca posição 
      for(let i=0;i<matrixPos.length;i++) {
        this.pos[i][posLin] += 1;
      }
      
      matrixCorte.splice(posLin,1);
    }
    else {
      for(let i=0;i<matrixPos.length;i++) {
        this.pos[posCol][i] += 1;
      }

      for (let i in matrixCorte) {
        aux.push(matrixPos[i].slice(posCol,1));
        matrixCorte[i].splice(posCol,1);
      }
    }

    this.cortes.push(1);

  }

  constructor() {
    //exemplo do caderno
    let matrix: number[][] = [];

    matrix = [[1000, 65, 53, 37], [65, 1000, 95, 1000],
              [53, 95, 1000, 81], [37, 1000, 81, 1000]];

          
    this.metodo(matrix);
  }

  ngOnInit() {
  }

}
