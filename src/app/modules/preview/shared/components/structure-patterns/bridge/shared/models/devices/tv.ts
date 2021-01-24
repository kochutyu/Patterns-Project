import {IDevice} from "../../interfaces/device.interface";

export class Tv implements IDevice{

  public channel = 0;
  public volume = 0;
  public power = false;

  public disable(): void {
    this.power = false;
  }

  public enable(): void {
    this.power = true;
  }

  public getChannel(): number {
    return this.channel;
  }

  public getVolume(): number {
    return this.volume;
  }

  public isEnabled(): boolean {
    return this.power;
  }

  public setVolume(percent): void {
    this.volume = percent;
  }

  public setChannel(channel): void {
    this.channel = channel;
  }

}
