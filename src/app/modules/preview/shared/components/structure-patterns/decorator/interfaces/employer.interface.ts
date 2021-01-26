import {IPerson} from "./person.interface";

export interface IEmployer extends IPerson{
  id: string;
  working(): void;
}
