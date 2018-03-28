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

  constructor(private mapgetroutesservice: MapgetroutesService) { }

  ngOnInit() {

  }

  resolve(): void {
    //this.mapgetroutesservice.getarrays(this.distance, this.duration);
    //class example
    this.distance[0] = [1000, 2, 4, 1, 10, 1000, 1000];
    this.distance[1] = [2, 1000, 1000, 1, 1000, 1000, 1000];
    this.distance[2] = [4, 1000, 1000, 4, 1000, 1000, 3];
    this.distance[3] = [1, 1, 4, 1000, 7, 10, 7];
    this.distance[4] = [10, 1000, 1000, 7, 1000, 8, 5];
    this.distance[5] = [1000, 1000, 1000, 10, 8, 1000, 3];
    this.distance[6] = [1000, 1000, 3, 7, 5, 3, 1000];
    this.extmin();
  }

  extmin(): void {
    var aux: number = 1000;
    var marcano: number[];
    var rede: number[];
    for (let i=0; i<=6; i++) {
      for (let j=0; j<=6; j++) {
        if (this.distance[i][j]<=aux) {
          aux = this.distance[i][j];
          marcano[0] = i;
          marcano[1] = j;
        }
      }
    }
  }

}
