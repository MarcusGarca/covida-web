import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MensagemService } from 'src/app/service/mensagem.service';

import { Resposta } from 'src/app/model/resposta.model';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  frm!: FormGroup;
  formularioResposta!: Resposta;

  constructor(
    public formBuilder: FormBuilder,
    private msgService: MensagemService
  ) {
    this.formularioResposta = {} as Resposta;
  }
  ngOnInit(): void {
    this.frm = new FormGroup({
      febre: new FormControl(0),

      sintomas: new FormGroup({
        sintomas1: new FormControl(false),
        sintomas2: new FormControl(false),
        sintomas3: new FormControl(false),
        sintomas4: new FormControl(false),
        sintomas5: new FormControl(false),
        sintomas6: new FormControl(false),
        sintomas7: new FormControl(false),
        sintomas8: new FormControl(false),
        sintomas9: new FormControl(false),
        sintomas10: new FormControl(false),
        sintomas11: new FormControl(false),
      }),

      epidemiologica: new FormControl(0),

      comorbidades: new FormGroup({
        comorbidades1: new FormControl(false),
        comorbidades2: new FormControl(false),
        comorbidades3: new FormControl(false),
        comorbidades4: new FormControl(false),
        comorbidades5: new FormControl(false),
        comorbidades6: new FormControl(false),
        comorbidades7: new FormControl(false),
        comorbidades8: new FormControl(false),
        comorbidades9: new FormControl(false),
        comorbidades10: new FormControl(false),
        comorbidades11: new FormControl(false),
        comorbidades12: new FormControl(false),
        comorbidades13: new FormControl(false),
      }),
    });
  }

  get frmValues() {
    return this.frm.controls;
  }

  salvar() {
    let vrForm = this.frm.value;
    console.log(vrForm);
    //Febre
    let febre = parseFloat(vrForm.febre);
    //Sintomas
    let mialgia = vrForm.sintomas.sintomas1;
    mialgia === true ? (mialgia = 3) : (mialgia = 0);
    let cefaleia = vrForm.sintomas.sintomas2;
    cefaleia === true ? (cefaleia = 0.5) : (cefaleia = 0);
    let tosse = vrForm.sintomas.sintomas3;
    tosse === true ? (tosse = 1) : (tosse = 0);
    let garganta = vrForm.sintomas.sintomas4;
    garganta === true ? (garganta = 1) : (garganta = 0);
    let saturacao = vrForm.sintomas.sintomas5;
    saturacao === true ? (saturacao = 10) : (saturacao = 0);
    let diarreia = vrForm.sintomas.sintomas6;
    diarreia === true ? (diarreia = 2.5) : (diarreia = 0);
    let vomito = vrForm.sintomas.sintomas7;
    vomito === true ? (vomito = 1) : (vomito = 0);
    let olfato = vrForm.sintomas.sintomas8;
    olfato === true ? (olfato = 3) : (olfato = 0);
    let paladar = vrForm.sintomas.sintomas9;
    paladar === true ? (paladar = 3) : (paladar = 0);
    let lombalgia = vrForm.sintomas.sintomas10;
    lombalgia === true ? (lombalgia = 4) : (lombalgia = 0);
    let dorMembros = vrForm.sintomas.sintomas11;
    dorMembros === true ? (dorMembros = 4) : (dorMembros = 0);
    //Epidemiológica
    let epidemiologica = parseFloat(vrForm.epidemiologica);
    //Comorbidades
    let hipertensao = vrForm.comorbidades.comorbidades1;
    hipertensao === true ? (hipertensao = 3) : (hipertensao = 0);
    let diabetes = vrForm.comorbidades.comorbidades2;
    diabetes === true ? (diabetes = 3) : (diabetes = 0);
    let insufCardiaca = vrForm.comorbidades.comorbidades3;
    insufCardiaca === true ? (insufCardiaca = 3) : (insufCardiaca = 0);
    let obesidade = vrForm.comorbidades.comorbidades4;
    obesidade === true ? (obesidade = 3) : (obesidade = 0);
    let imunosupressor = vrForm.comorbidades.comorbidades5;
    imunosupressor === true ? (imunosupressor = 3) : (imunosupressor = 0);
    let hiv = vrForm.comorbidades.comorbidades6;
    hiv === true ? (hiv = 3) : (hiv = 0);
    let asplenia = vrForm.comorbidades.comorbidades7;
    asplenia === true ? (asplenia = 3) : (asplenia = 0);
    let transplantado = vrForm.comorbidades.comorbidades8;
    transplantado === true ? (transplantado = 3) : (transplantado = 0);
    let quimio = vrForm.comorbidades.comorbidades9;
    quimio === true ? (quimio = 3) : (quimio = 0);
    let outras = vrForm.comorbidades.comorbidades10;
    outras === true ? (outras = 3) : (outras = 0);
    let asma = vrForm.comorbidades.comorbidades11;
    asma === true ? (asma = 3) : (asma = 0);
    let renal = vrForm.comorbidades.comorbidades12;
    renal === true ? (renal = 3) : (renal = 0);
    let pneumopatias = vrForm.comorbidades.comorbidades13;
    pneumopatias === true ? (pneumopatias = 3) : (pneumopatias = 0);

    let postForm =
      febre +
      mialgia +
      cefaleia +
      tosse +
      garganta +
      saturacao +
      diarreia +
      vomito +
      olfato +
      paladar +
      lombalgia +
      dorMembros +
      epidemiologica +
      hipertensao +
      diabetes +
      insufCardiaca +
      obesidade +
      imunosupressor +
      asplenia +
      transplantado +
      quimio +
      outras +
      asma +
      renal +
      pneumopatias;
    console.log('score aqui' + febre);

    if (postForm > 10) {
      this.msgService.mensagemEnvioFormulario(
        'score: ' + postForm + ' Dirija-se ao Hospital mais próximo'
      );
    } else if (postForm < 10 && postForm >= 5) {
      this.msgService.mensagemEnvioFormulario(
        'score: ' +
          postForm +
          ' Realize o exame Antígeno nasal e Sorologia (Farmácia)'
      );
    } else if (postForm < 5 && postForm >= 0) {
      this.msgService.mensagemEnvioFormulario(
        'score: ' +
          postForm +
          ' Fique tranquilo, mas caso um dos sintomas se agrave procure um médico'
      );
    } else {
      this.msgService.mensagemEnvioFormulario(
        'score: ' +
          postForm +
          ' Fique tranquilo, mas caso um dos sintomas se agrave procure um médico'
      );
    }
  }

  onRadioChange(event: any) {
    event.target.value;
  }

  resetForm() {
    this.frm.reset();
  }
}
