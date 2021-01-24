import {Component, Input, OnInit} from '@angular/core';
import {Composite} from "../../models/composite";
import {MyComponent} from "../../models/component";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss', '../../../composite.component.scss']
})
export class TreeComponent implements OnInit {

  @Input()
  public tree: Array<Composite> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addNewBranch(branch: MyComponent): void{
    branch.add(new Composite());
  }

  public removeBranch(parent: MyComponent, branch: MyComponent): void{
    parent.remove(branch);
  }

}
