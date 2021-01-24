import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoaderComponent} from "../components/loader/loader.component";
import {PrototypeService} from "./prototype.service";

@Injectable()
export class LoaderService {

  private selectedDialog: MatDialogRef<LoaderComponent, any>;

  constructor(
    private _dialog: MatDialog,
    private _prototype: PrototypeService
  ) {
  }

  public load(data: { img: string }): void {
    this.selectedDialog = this._dialog.open(LoaderComponent, {
      data,
      disableClose: true
    })

    setTimeout(() => this.hide(), 3000);
  }

  public hide(): void {
    if (!this.selectedDialog) {
      return;
    }

    this._prototype.update();
    this.selectedDialog.close();
  }


}
