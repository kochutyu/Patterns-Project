import {IPerson} from "./person.interface";

export interface IStudent extends IPerson {
  id: string;
  learning(): void;
}
