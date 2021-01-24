import {Remote} from "./remote";
import {IDevice} from "../../interfaces/device.interface";

export class AdvancedRemote extends Remote {

  constructor(device: IDevice) {
    super(device);
  }

  public mute(): void {
    this.device.setVolume(0);
  }

}
