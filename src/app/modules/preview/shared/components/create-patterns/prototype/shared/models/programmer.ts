import {IPrototype} from "../interfaces/prototype.interface";
import {PersonalDetails} from "./personal-details.prototype";

export class Programmer implements IPrototype {

  public prototype: any;

  constructor(prototype: PersonalDetails) {
    this.prototype = prototype;
  }

  public showMessage(message: string): void {
    alert(message);
  }

}
