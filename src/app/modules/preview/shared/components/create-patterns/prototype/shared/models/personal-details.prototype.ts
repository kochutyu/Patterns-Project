import {IClone} from "../interfaces/clone.interface";
import {Job} from "../types/job.type";

export class PersonalDetails implements IClone{

  public salary: number;
  public term: number;
  public age: number;
  public name: string;
  public surname: string;
  public position: Job;

  public clone(): PersonalDetails {
    const clone = Object.create(this);
    clone.position = {
      ...this.position,
      prototype: {...this}
    }

    console.log(clone)
    return clone;
  };


}
