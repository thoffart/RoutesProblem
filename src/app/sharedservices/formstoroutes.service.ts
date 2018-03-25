import { Injectable } from '@angular/core';

@Injectable()
export class FormstoroutesService {
  private rotas: string[];
  constructor() { }

  Addroutes(rotas: string[]) {
    this.rotas = rotas;
  }

  Sendroutes(rotas: string[]) {
    rotas = this.rotas;
  }

}
