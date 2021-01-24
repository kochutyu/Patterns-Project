export interface IDevice {
  isEnabled(): boolean;

  enable(): void;

  disable(): void

  getVolume(): number;

  setVolume(percent): void;

  getChannel(): number;

  setChannel(channel): void;
}
