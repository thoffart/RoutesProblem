import { MapgetroutesService } from './../sharedservices/mapgetroutes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {
  distance: number[][] = [];
  duration: number[][] = [];
  rede: string = ''
  constructor(private mapgetroutesservice: MapgetroutesService) { }

  ngOnInit() {

  }

  resolveextmin(): void {
    //this.mapgetroutesservice.getarrays(this.distance, this.duration);
    //class example
    this.distance[0] = [1000,     2,   4,   1,    10,   1000,   1000];
    this.distance[1] = [    2, 1000,1000,   1,   1000,  1000,   1000];
    this.distance[2] = [    4, 1000,1000,   4,   1000,  1000,      3];
    this.distance[3] = [    1,    1,   4,1000,      7,    10,      7];
    this.distance[4] = [   10, 1000,1000,   7,   1000,     8,      5];
    this.distance[5] = [ 1000, 1000,1000,  10,      8,  1000,      3];
    this.distance[6] = [ 1000, 1000,   3,   7,      5,     3,   1000];
    this.extmin();
  }

  extmin(): void {
    var aux: number = 1000;
    var marcano: number[] = [];
    var rede: string[] = [];
    for (let i=0; i<this.distance.length; i++) {
      aux = 1000;
      for (let j=0; j<this.distance.length; j++) {
        if (this.distance[j][i]<=aux) {
          aux = this.distance[j][i];
          marcano[0] = j;
          marcano[1] = i;
          console.log(marcano[0], ' ', marcano[1]);
        }
      }
      rede[i] = String(marcano[0]) + ' ' + String(marcano[1]);
      console.log(rede);
    }
  }

  resolve(): void {
    //class example
    this.duration[0] = [1000,   18, 1000,   32, 1000, 1000];
    this.duration[1] = [  18, 1000,   12,   28, 1000, 1000];
    this.duration[2] = [1000,   12, 1000,   17, 1000,   32];
    this.duration[3] = [  32,   28,   17, 1000,    4,   12];
    this.duration[4] = [1000, 1000, 1000,    4, 1000,   11];
    this.duration[5] = [1000, 1000,   32,   17,   11, 1000];
    this.percmin();
  }

  percmin(): void {
    var aux: number = 1000;
    var auxmarcano: number = 0;
    var jafoi: number[] = [];
    var marcano: number[][];
    marcano = [];
    var rede: string[] = [];
    var z: number[] = [];
    var redeaux: string[] = [];
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
            marcano[j][k] = marcano[j+1][k];;
            this.duration[j+1][k] = aux;
            marcano[j+1][k] = auxmarcano;
          }
        }
      }
    }
    for (let i=0;i<this.duration[0].length;i++) {
      if (this.duration[0][i] != 1000) {
        jafoi = [];
        z[i] = this.recurpercmin(i, 0, marcano, jafoi, 0, this.rede);
        redeaux[i] = this.rede;
      }
    }
    console.log(z);
    console.log(redeaux);
    //console.log(marcano);
    //console.log('teste');
    //console.log(this.duration);

  }

  recurpercmin(i: number, j: number, marcano: number[][], jafoi: number[], n: number, rede: string): number {
    var aux: number = 0;
    if (j==this.duration[0].length-1) { //ça routine vérifie si le noeud est le demière
      return 0;
    }
    if (this.check(jafoi, marcano[i][j])) {  // ça routine vérifie si le noeud c'était marqué
      return this.recurpercmin(i+1, j, marcano, jafoi, n, rede);
    }
    jafoi[n] = j;
    n++;
    rede += String(j) + ' ' + String(marcano[i][j]) + ' ';
    return this.recurpercmin(0, marcano[i][j], marcano, jafoi, n, rede) + this.duration[i][j];
  }

  check(jafoi: number[], n): boolean {
    for (let i=0; i<jafoi.length; i++) {
      if (jafoi[i]==n) {
        return true;
      }
    }
    return false;
  }

}
