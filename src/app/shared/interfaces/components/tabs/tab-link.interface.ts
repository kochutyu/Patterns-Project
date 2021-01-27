import {ENavbar} from "../../../enums/navbar.enum";


export interface ITabLink {
  name: string;
  route: Array<string>;
  path?: string;
  icon?: string;
  id?: ENavbar;
}
