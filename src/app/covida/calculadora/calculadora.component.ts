import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  febreSeason!: number;
  itensFebre: any[] = [
    { name: 'Febre aferida na triagem, acima de 38° C', valor: 3 },
    { name: 'Febre somente relatada', valor: 1 },
    { name: 'Ausência de febre', valor: 0 },
  ];
  epidemiologicaSeason!: number;
  itensEpidemiologica: any[] = [
    { name: 'Contato com caso positivo', valor: 5 },
    { name: 'Não tem história de contato', valor: 0 },
  ];

  checkBoxValueList: any[] = [
    { name: 'Febre aferida na triagem, acima de 38° C', value: 3 },
    { name: 'Febre somente relatada', value: 1 },
    { name: 'Ausência de febre', value: 0 },
  ];

  itensSintomas = this.fb.group({
    mialgia: false,
    cefaleia: false,
    tosse: false,
    garganta: false,
    saturacao: false,
    diarreia: false,
    vomito: false,
    olfato: false,
    paladar: false,
    lombalgia: false,
    dores: false,
  });
  itensComorbidades = this.fb.group({
    hipertensao: false,
    diabetes: false,
    insuficiencia: false,
    obesidade: false,
    imunosupressor: false,
    hiv: false,
    asplenia: false,
    transplantado: false,
    quimioterapia: false,
    autoImunes: false,
    asma: false,
    renal: false,
    pneumopatias: false,
  });

  constructor(public fb: FormBuilder) {}
}
