import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

import {LoaderComponent} from "../../shared/components/loader/loader.component";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private selectedDialog: MatDialogRef<LoaderComponent, any>;

  constructor(
    private _dialog: MatDialog,
  ) {
  }

  public load(data: { img: string; title?: string }): void {
    this.selectedDialog = this._dialog.open(LoaderComponent, {
      data,
      disableClose: true,
      panelClass: ['loader-modal']
    })
  }

  public hide(): void {
    if (!this.selectedDialog) {
      return;
    }

    this.selectedDialog.close();
  }


}
