import { DirectionModel } from './directions.model';
export class RoutesModel {
  constructor(
    public directions: DirectionModel, 
    public travelMode: string) {
  }
}
