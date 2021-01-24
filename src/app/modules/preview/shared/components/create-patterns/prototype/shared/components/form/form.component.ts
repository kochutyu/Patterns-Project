import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PrototypeService} from "../../services/prototype.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _prototype: PrototypeService,
    private dialogRef: MatDialogRef<FormComponent>
  ) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  public submit(): void {
    this._prototype.update(this.form.value);
    this.dialogRef.close();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      term: new FormControl('', [Validators.required])
    })
  }

}
