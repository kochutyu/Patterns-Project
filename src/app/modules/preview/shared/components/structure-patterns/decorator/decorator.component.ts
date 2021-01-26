import {Component} from "@angular/core";
import {employer} from "./models/employer";
import {IPerson} from "./interfaces/person.interface";
import {student} from "./models/student";


@Component({
  styleUrls: ['./decorator.component.scss', '../../../../preview.component.scss'],
  template: `
    <mat-card class="category">
      <mat-card-title>

        <div class="patterns">
          <div class="student">
            <h2>Before</h2>
            <pre>
              {{men2 | json}}
            </pre>
          </div>

          <div class="student">
            <h2>After</h2>
            <pre>
              {{student | json}}
            </pre>
          </div>
        </div>
      </mat-card-title>
    </mat-card>
  `
})
export class DecoratorComponent {

  men1: IPerson = {
    name: 'George',
    surname: 'Timber',
    age: 32
  }

  men2: IPerson = {
    name: 'Mike',
    surname: 'Gerald',
    age: 17
  }

  student = student(this.men2);


  constructor() {
    employer({age: 19, name: 'Yura', surname: 'Kochut'})
  }
}
