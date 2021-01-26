import {IPerson} from "../interfaces/person.interface";
import {IEmployer} from "../interfaces/employer.interface";

export const employer = (person: IPerson): IEmployer => {
  const user: IEmployer = Object.create(person);
  user.id = `employer-${Date.now()}`;
  user.working = () => {
    alert('Some working');
  }
  return user;
}
