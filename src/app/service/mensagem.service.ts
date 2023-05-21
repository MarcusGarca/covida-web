import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  snackBar = inject(MatSnackBar);

  constructor() {}

  mensagemEnvioAlerta(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-alerta',
    });
  }

  mensagemEnvioAtencao(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-atencao',
    });
  }

  mensagemEnvioNegativo(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-sucesso',
    });
  }

  mensagemEnvioErro(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-erro',
    });
  }

  mensagemSucessoEnvioFormulario() {
    this.snackBar.open('Envio realizado com Sucesso!', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-sucesso',
    });
  }

  mensagemErroEnvioFormulario() {
    this.snackBar.open(
      'Ocorreu um erro. Por gentileza, tente mais tarde',
      'OK',
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'snackbar-alerta',
      }
    );
  }
}
