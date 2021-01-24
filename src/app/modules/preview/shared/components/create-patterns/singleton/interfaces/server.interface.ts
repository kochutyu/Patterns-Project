import {Dns} from "../model/dns";

export interface IServer {
  dns: Dns;
  isConnected: boolean;
}
