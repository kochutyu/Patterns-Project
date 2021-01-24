export abstract class MyComponent {
  protected parent: MyComponent;

  public setParent(parent: MyComponent) {
    this.parent = parent;
  }

  public getParent(): MyComponent {
    return this.parent;
  }

  public add(component: MyComponent): void { }

  public remove(component: MyComponent): void { }

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}
