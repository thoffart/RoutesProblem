import { MarkerModel } from './marker.model';
export class DirectionModel {
  constructor(
    public origin: MarkerModel,
    public destination: MarkerModel
  ) {}
}