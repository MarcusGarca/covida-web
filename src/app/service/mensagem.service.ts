import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  snackBar = inject(MatSnackBar);

  constructor() {}

  mensagemEnvioFormulario(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-sucesso',
    });
  }
}
