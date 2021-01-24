export class Dns {

  public static instance: Dns;
  public readonly name: string;

  constructor(name) {
    this.name = name;
  }

  public static getInstance(name: string): Dns {
    if (!Dns.instance) {
      return new Dns(name)
    }
    return Dns.instance;
  }

}
