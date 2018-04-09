import { Injectable } from '@angular/core';
import { MapgetroutesService } from './mapgetroutes.service';

@Injectable()
export class MethodsService {
  distance: number[][] = [];
  duration: number[][] = [];
  rede: string = '';
  resultado: string[] = [];
  distanceaux: number[][] = [];

  x: number[][] = [];
  testeMatrix1: number[][] = [];
  testeMatrix2: number[][] = [];
  testeArray1: number[] = [];
  testeVar1;
  estado: string[] = [];
  rota = [];

  pos: number[][] = [];
  cortes: number[] =[];

  
  constructor(private mapgetroutesservice: MapgetroutesService) { }

  ngOnInit() {

  }

  getarrays(): void {
    this.distance = [];
    this.distance.length = 0;
    this.distance = this.mapgetroutesservice.getdistance();
    this.duration = this.mapgetroutesservice.getduration();
  }

  resolveextmin(): void {
    //this.mapgetroutesservice.getarrays(this.distance, this.duration);
    //class example
    this.distance = [];
    this.distance.length = 0;
    this.distance[0] = [1000,     2,   4,   1,    10,   1000,   1000];
    this.distance[1] = [    2, 1000,1000,   1,   1000,  1000,   1000];
    this.distance[2] = [    4, 1000,1000,   4,   1000,  1000,      3];
    this.distance[3] = [    1,    1,   4,1000,      7,    10,      7];
    this.distance[4] = [   10, 1000,1000,   7,   1000,     8,      5];
    this.distance[5] = [ 1000, 1000,1000,  10,      8,  1000,      3];
    this.distance[6] = [ 1000, 1000,   3,   7,      5,     3,   1000];
    this.extmin();
  }

  resolveextminAPI(): void {
    this.getarrays();
    this.extmin();
  }

  extmin(): void {
    var aux: number = 9000000000;
    var rede: string[] = [];
    var marcano: number[][] = [];
    var auxmarcano: number = 0;
    var jafoi: number[] = [];
    var z: number = 0;

    
    marcano[0] = [0, 0, 0, 0, 0, 0, 0];
    marcano[1] = [1, 1, 1, 1, 1, 1, 1];
    marcano[2] = [2, 2, 2, 2, 2, 2, 2];
    marcano[3] = [3, 3, 3, 3, 3, 3, 3];
    marcano[4] = [4, 4, 4, 4, 4, 4, 4];
    marcano[5] = [5, 5, 5, 5, 5, 5, 5];
    marcano[6] = [6, 6, 6, 6, 6, 6, 6];
    marcano[7] = [7, 7, 7, 7, 7, 7, 7];
    
    for (let k=0; k<this.distance.length;k++) {
      for (let i=0; i<this.distance.length-1; i++) {
        for (let j=0; j<this.distance.length-i-1; j++) {
          if (this.distance[j][k]> this.distance[j+1][k]) {
            aux = this.distance[j][k];
            auxmarcano = marcano[j][k];
            this.distance[j][k] = this.distance[j+1][k];
            marcano[j][k] = marcano[j+1][k];
            this.distance[j+1][k] = aux;
            marcano[j+1][k] = auxmarcano;
          }
        }
      }
    }

    
   
    
    z = this.recurextmin(0, 0, marcano, jafoi, 0);
    for (let i=0;i<jafoi.length-1;i++) {
      rede[i] = String(jafoi[i]) + ' ' + String(jafoi[i+1]);
    }
    this.resultado = [];
    this.resultado = rede;
  }


  recurextmin(i: number, j: number, marcano: number[][], jafoi: number[], n: number): number {
    var aux: number = 0;
    if (!this.check(jafoi, j)) {
      jafoi[n] = j;
      n++;
    }
    if (jafoi.length==this.distance[0].length||i>=this.distance[0].length||j>=this.distance[0].length) { 
      return 0;
    }
    if (this.check(jafoi, marcano[i][j])) {  
      return this.recurextmin(i+1, j, marcano, jafoi, n);
    }
    return this.recurextmin(0, marcano[i][j], marcano, jafoi, n) + this.distance[i][j];
  }


  resolvepercmin(): void {
    this.distance = [];
    this.distance.length = 0;
   this.duration[0] = [9000000000,   18, 1000,   32, 9000000000, 9000000000];
   this.duration[1] = [  18, 9000000000,   12,   28, 9000000000, 9000000000];
   this.duration[2] = [9000000000,   12, 9000000000,   17, 9000000000,   32];
   this.duration[3] = [  32,   28,   17, 9000000000,    4,   12];
   this.duration[4] = [9000000000, 9000000000, 9000000000,    4, 9000000000,   11];
   this.duration[5] = [9000000000, 9000000000,   32,   17,   11, 9000000000];
  this.percmin();
  }

  
  check(jafoi: number[], n): boolean {
    for (let i=0; i<jafoi.length; i++) {
      if (jafoi[i]==n) {
        return true;
      }
    }
    return false;
  }



  resolvepercminAPI(): void {
    this.getarrays();
    this.percmin();
  }


  percmin(): void {
    var aux: number = 1000;
    var auxmarcano: number = 0;
    var jafoi: number[] = [];
    var jafoiaux: number[][] = [];
    var marcano: number[][];
    marcano = [];
    var z: number[] = [];
    console.log(this.duration);
    for (var i = 0; i < 10; i++) {
			marcano[i] = [];
		}
    marcano[0] = [0, 0, 0, 0, 0, 0];
    marcano[1] = [1, 1, 1, 1, 1, 1];
    marcano[2] = [2, 2, 2, 2, 2, 2];
    marcano[3] = [3, 3, 3, 3, 3, 3];
    marcano[4] = [4, 4, 4, 4, 4, 4];
    marcano[5] = [5, 5, 5, 5, 5, 5];
    
    for (let k=0; k<this.duration.length;k++) {
      for (let i=0; i<this.duration.length-1; i++) {
        for (let j=0; j<this.duration.length-i-1; j++) {
          if (this.duration[j][k]> this.duration[j+1][k]) {
            aux = this.duration[j][k];
            auxmarcano = marcano[j][k];
            this.duration[j][k] = this.duration[j+1][k];
            marcano[j][k] = marcano[j+1][k];
            this.duration[j+1][k] = aux;
            marcano[j+1][k] = auxmarcano;
          }
        }
      }
    }
    for (let i=0;i<this.duration.length-1;i++) {

      if (this.duration[0][i] != 9000000000) {
        jafoi = [];
        z[i] = this.recurpercmin(i, 0, marcano, jafoi, 0);
        jafoi.push(this.duration[0].length-1);
        jafoiaux[i] = jafoi;
      }
    }
    this.criarede(jafoiaux, z);
    //console.log(marcano);
    //console.log('teste');
    //console.log(this.duration);

  }


  criarede(jafoiaux: number[][], z: number[]): void {
    var aux: number;
    var auxj: number[] = [];
    for (let i=0; i<z.length-1;i++) {
      for (let j=0; j<z.length-i-1; j++) {
        if (z[j]>z[j+1]) {
          aux = z[j];
          auxj = jafoiaux[j];
          z[j] = z[j+1];
          jafoiaux[j] = jafoiaux[j+1];
          z[j+1] = aux;
          jafoiaux[j+1] = auxj;
        }
      }
    }
    this.resultado = [];
    for (let k=0; k<jafoiaux[0].length-1; k++) {
      this.resultado[k] = String(jafoiaux[0][k]) + ' ' + String(jafoiaux[0][k+1]);
    }
  }

  recurpercmin(i: number, j: number, marcano: number[][], jafoi: number[], n: number): number {
    var aux: number = 0;
    if (j==this.duration[0].length-1) { 
      return 0;
    }
    if (this.check(jafoi, marcano[i][j])) {  
      return this.recurpercmin(i+1, j, marcano, jafoi, n);
    }
    jafoi[n] = j;
    n++;
    return this.recurpercmin(0, marcano[i][j], marcano, jafoi, n) + this.duration[i][j];
  }



  fluxomaximo(): number[][] {
    this.distance = [];
    this.distance.length = 0;
    this.distance[0] = [Infinity, 20, 30, 10, Infinity];
    this.distance[1] = [Infinity, Infinity, 40, Infinity, 30];
    this.distance[2] = [Infinity, Infinity, Infinity, 10, 20];
    this.distance[3] = [Infinity, Infinity, 5, Infinity, 20];
    this.distance[4] = [Infinity, Infinity, Infinity, Infinity, Infinity];
    let kmin: Array<number> = [];
    let custototal = 0;
    let custoaux: number;
    let visitados: Array<boolean> = [];
    let noatual: string;
    let nos: Array<string> = [];

    noatual = '0';
    for (const i in this.distance) {
      visitados[i] = false;
    }
    while(this.fluxauxmaximo(noatual, visitados, nos, kmin)) {
      custototal += Math.min(...kmin);
      custoaux = Math.min(...kmin);
      for (let i = 0; i < nos.length - 1; i++) {
        if (this.distance[nos[i]][nos[i + 1]] === Infinity) {
          this.distance[nos[i]][nos[i + 1]] = custoaux;
        } else {
          this.distance[nos[i]][nos[i + 1]] += custoaux;
        }
        if ((this.distance[nos[i + 1]][nos[i]] - custoaux) === 0) {
          this.distance[nos[i + 1]][nos[i]] = Infinity;
        } else {
          this.distance[nos[i + 1]][nos[i]] -= custoaux;
        }
      }
      noatual = '0';
      nos = [];
      kmin = [];
      for (const i in this.distance) {
        visitados[i] = false;
      }
     }
     console.log(this.distance);
     console.log(custototal);

     return this.distance;
  }



  fluxauxmaximo(noatual: string, visitados: boolean[], nos: string[], kmin: number[] ): boolean {
    if (Number(noatual) === (this.distance.length - 1)) {
      nos.push(noatual);
      return true;
    }
    visitados[noatual] = true;
    let custoaux: number;
    let proxno: string;
    let controle: boolean;
    do {
      custoaux = 0;
      controle = false;
      for (const i in this.distance[noatual]) {
        if (this.distance[noatual][i] > custoaux && this.distance[noatual][i] !==  Infinity && visitados[i] !== true)  {
          proxno = i;
          custoaux = this.distance[noatual][i];
          controle = true;
        }
      }
      if (controle === false) {
        return false;
      }
    }while (!this.fluxauxmaximo(proxno, visitados, nos, kmin));
    nos.push(noatual);
    kmin.push(custoaux);
    return true;
  }

  sendrede(): string[] {
    return this.resultado;
  }











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

    console.log(caminho);
    
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

  resolvecaxeiro() {
    this.distance = [];
    this.distance.length = 0;
    this.distance = [
    [1000, 65, 53, 37], 
    [65, 1000, 95, 1000],
    [53, 95, 1000, 81], 
    [37, 1000, 81, 1000]
  ];
  this.metodo(this.distance);
  }

  resolvecaxeiroAPI() {
    this.getarrays();
    console.log("TESTE00" + this.distance);
    this.distance.pop();
    this.distance = [
      [1000, 65, 53, 37], 
      [65, 1000, 95, 1000],
      [53, 95, 1000, 81], 
      [37, 1000, 81, 1000]
    ];
  

    this.metodo(this.distance);
  }


}












