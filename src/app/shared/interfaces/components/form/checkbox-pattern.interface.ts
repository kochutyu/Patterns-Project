import {ECreatePattern} from "../../../enums/patterns/create-pattern/create-pattern.enum";
import {EStructurePattern} from "../../../enums/patterns/structure-pattern/structure-pattern.enum";


export interface ICheckboxPattern {
  isChecked: boolean;
  value: ECreatePattern | EStructurePattern;
  id?: string;
}
