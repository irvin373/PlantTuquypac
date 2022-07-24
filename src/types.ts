import {ImageName} from './components/TQImage';

export type PlantType = {
  id: number, 
  name: string,
  imageName: ImageName,
  description: string,
  MedicalName: string
};

export type RecipeType = {
  id: number, 
  name: string,
  imageName: ImageName,
  preparation: string
};
