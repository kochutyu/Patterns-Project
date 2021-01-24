import {IMan} from "./man.interface";

export interface IManBuilder {
  buildHead(): void;
  buildBody(): void;
  removeHead(): void;
  removeBody(): void;
  getResult(): IMan;
}
