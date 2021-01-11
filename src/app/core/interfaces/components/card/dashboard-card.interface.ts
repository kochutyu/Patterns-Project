import {ECreatePattern} from "../../../enums/patterns/create-pattern/create-pattern.enum";
import {EStructurePattern} from "../../../enums/patterns/structure-pattern/structure-pattern.enum";
import {ECreatePatternImg} from "../../../enums/patterns/create-pattern/create-pattern-img.enum";
import {EStructurePatternImg} from "../../../enums/patterns/structure-pattern/structure-pattern-img.enum";


export interface IDashboardCard {
  title: string;
  imgSrc: ECreatePatternImg | EStructurePatternImg;
  id?: ECreatePattern | EStructurePattern;
}
