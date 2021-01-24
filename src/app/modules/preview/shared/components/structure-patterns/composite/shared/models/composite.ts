import {MyComponent} from "./component";

export class Composite extends MyComponent {

  protected children: MyComponent[] = [];

  public add(component: MyComponent): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: MyComponent): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public getChildren(): MyComponent[] {
    return this.children;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join('+')})`;
  }

}
