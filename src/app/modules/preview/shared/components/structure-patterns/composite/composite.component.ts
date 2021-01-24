import {Component} from "@angular/core";
import {Composite} from "./shared/models/composite";


@Component({
  styleUrls: ['./composite.component.scss', '../../../../preview.component.scss'],
  template: `

    <mat-card class="category">
      <mat-card-title>Tree</mat-card-title>

      <ul class="docs">
        <li>
          <h3>DOCS:</h3>
        </li>
        <li class="docs__info">
          <button color="primary" mat-raised-button disabled>
            <mat-icon>add</mat-icon>
          </button>
          <span> - Add new component</span>
        </li>
        <li class="docs__info">
          <button color="warn" mat-raised-button disabled>
            <mat-icon>remove</mat-icon>
          </button>
          <span> - Remove selected component</span>
        </li>
      </ul>

      <div class="component">
        <h2>Master</h2>
        <button mat-raised-button color="primary" (click)="createMasterBranch()">
          <mat-icon>add</mat-icon>
        </button>
      </div>
      <app-tree class="tree" [tree]="master.getChildren()"></app-tree>

    </mat-card>
  `
})
export class CompositeComponent {

  public master: Composite = new Composite();
  public masterBranches: Array<Composite> = [];

  createMasterBranch() {
    this.master.add(new Composite());
  }

}
