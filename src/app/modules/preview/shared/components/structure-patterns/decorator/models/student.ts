import {IPerson} from "../interfaces/person.interface";
import {IStudent} from "../interfaces/student.interface";

export const student = (person: IPerson): IStudent => {
  const user: any = person;
  user.id = `student-${Date.now()}`;
  user.learning = () => {
    alert('The student is learning...')
  }
  return user;
}
