import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MensagemService } from 'src/app/service/mensagem.service';
import { Resposta } from 'src/app/model/resposta.model';
import { RespostaService } from 'src/app/service/resposta.service';
import { requireCheckboxesToBeCheckedValidator } from './require-checkbox';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  frm!: FormGroup;
  frmResposta!: Resposta;
  resposta!: Resposta;
  frmRespostaPost: any;
  disabled: boolean = false;
  disabledBtnDiagnostico: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private msgService: MensagemService,
    private respostaService: RespostaService
  ) {
    this.frmResposta = {} as Resposta;
    this.resposta = {} as Resposta;
  }
  ngOnInit(): void {
    this.frm = new FormGroup({
      febre: new FormControl('', [Validators.required]),
      epidemiologica: new FormControl('', [Validators.required]),

      comorbidades: new FormGroup(
        {
          comorbidades0: new FormControl(false),
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
        },
        [Validators.required, requireCheckboxesToBeCheckedValidator()]
      ),

      sintomas: new FormGroup(
        {
          sintomas0: new FormControl(false),
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
        },
        [Validators.required, requireCheckboxesToBeCheckedValidator()]
      ),
    });
  }

  get febre() {
    return this.frm.get('febre')!;
  }
  get epidemiologica() {
    return this.frm.get('epidemiologica')!;
  }
  salvar() {
    const dataHora = new Date();

    let respostaPost = {
      febre: this.frm.get('febre')?.value!,
      epidemiologica: this.frm.get('epidemiologica')?.value!,
      dataHora: dataHora,
      sintoma: {
        sintoma0: this.frm.get('sintomas')?.value.sintomas0!,
        sintoma1: this.frm.get('sintomas')?.value.sintomas1!,
        sintoma2: this.frm.get('sintomas')?.value.sintomas2!,
        sintoma3: this.frm.get('sintomas')?.value.sintomas3!,
        sintoma4: this.frm.get('sintomas')?.value.sintomas4!,
        sintoma5: this.frm.get('sintomas')?.value.sintomas5!,
        sintoma6: this.frm.get('sintomas')?.value.sintomas6!,
        sintoma7: this.frm.get('sintomas')?.value.sintomas7!,
        sintoma8: this.frm.get('sintomas')?.value.sintomas8!,
        sintoma9: this.frm.get('sintomas')?.value.sintomas9!,
        sintoma10: this.frm.get('sintomas')?.value.sintomas10!,
        sintoma11: this.frm.get('sintomas')?.value.sintomas11!,
      },
      comorbidade: {
        comorbidades0: this.frm.get('comorbidades')?.value.comorbidades0!,
        comorbidades1: this.frm.get('comorbidades')?.value.comorbidades1!,
        comorbidades2: this.frm.get('comorbidades')?.value.comorbidades2!,
        comorbidades3: this.frm.get('comorbidades')?.value.comorbidades3!,
        comorbidades4: this.frm.get('comorbidades')?.value.comorbidades4!,
        comorbidades5: this.frm.get('comorbidades')?.value.comorbidades5!,
        comorbidades6: this.frm.get('comorbidades')?.value.comorbidades6!,
        comorbidades7: this.frm.get('comorbidades')?.value.comorbidades7!,
        comorbidades8: this.frm.get('comorbidades')?.value.comorbidades8!,
        comorbidades9: this.frm.get('comorbidades')?.value.comorbidades9!,
        comorbidades10: this.frm.get('comorbidades')?.value.comorbidades10!,
        comorbidades11: this.frm.get('comorbidades')?.value.comorbidades11!,
        comorbidades12: this.frm.get('comorbidades')?.value.comorbidades12!,
        comorbidades13: this.frm.get('comorbidades')?.value.comorbidades13!,
      },
    };

    this.respostaService.salvarResposta(respostaPost).subscribe({
      next: () => {
        this.msgService.mensagemSucessoEnvioFormulario();
        this.disabled = false;
        this.disabledBtnDiagnostico = true;
      },
      error: () => {
        this.msgService.mensagemErroEnvioFormulario();
        this.resetForm();
      },
    });
  }

  onRadioChange(event: any) {
    event.target.value;
  }

  resetForm() {
    this.frm.reset();
  }

  public validate(): void {
    if (this.frm.invalid) {
      for (const control of Object.keys(this.frm.controls)) {
        this.frm.controls[control].markAsTouched();
      }
      return;
    }
    this.resposta = this.frm.value;
  }

  diagnosticoForm() {
    this.frmRespostaPost = this.frm.value;
    if (Object.values(this.resposta).length === 0) {
      alert('objeto está vazio');
    }

    //Febre
    let febre = parseFloat(this.frmRespostaPost.febre);
    isNaN(febre) ? febre : 0;
    //Sintomas
    let semSintomas = 0;
    let mialgia = this.frmRespostaPost.sintomas.sintomas1;
    mialgia === true ? (mialgia = 3) : (mialgia = 0);
    let cefaleia = this.frmRespostaPost.sintomas.sintomas2;
    cefaleia === true ? (cefaleia = 0.5) : (cefaleia = 0);
    let tosse = this.frmRespostaPost.sintomas.sintomas3;
    tosse === true ? (tosse = 1) : (tosse = 0);
    let garganta = this.frmRespostaPost.sintomas.sintomas4;
    garganta === true ? (garganta = 1) : (garganta = 0);
    let saturacao = this.frmRespostaPost.sintomas.sintomas5;
    saturacao === true ? (saturacao = 10) : (saturacao = 0);
    let diarreia = this.frmRespostaPost.sintomas.sintomas6;
    diarreia === true ? (diarreia = 2.5) : (diarreia = 0);
    let vomito = this.frmRespostaPost.sintomas.sintomas7;
    vomito === true ? (vomito = 1) : (vomito = 0);
    let olfato = this.frmRespostaPost.sintomas.sintomas8;
    olfato === true ? (olfato = 3) : (olfato = 0);
    let paladar = this.frmRespostaPost.sintomas.sintomas9;
    paladar === true ? (paladar = 3) : (paladar = 0);
    let lombalgia = this.frmRespostaPost.sintomas.sintomas10;
    lombalgia === true ? (lombalgia = 4) : (lombalgia = 0);
    let dorMembros = this.frmRespostaPost.sintomas.sintomas11;
    dorMembros === true ? (dorMembros = 4) : (dorMembros = 0);
    //Epidemiológica
    let epidemiologica = parseFloat(this.frmRespostaPost.epidemiologica);
    isNaN(epidemiologica) ? epidemiologica : 0;
    //Comorbidades
    let semComorbidade = 0;
    let hipertensao = this.frmRespostaPost.comorbidades.comorbidades1;
    hipertensao === true ? (hipertensao = 3) : (hipertensao = 0);
    let diabetes = this.frmRespostaPost.comorbidades.comorbidades2;
    diabetes === true ? (diabetes = 3) : (diabetes = 0);
    let insufCardiaca = this.frmRespostaPost.comorbidades.comorbidades3;
    insufCardiaca === true ? (insufCardiaca = 3) : (insufCardiaca = 0);
    let obesidade = this.frmRespostaPost.comorbidades.comorbidades4;
    obesidade === true ? (obesidade = 3) : (obesidade = 0);
    let imunosupressor = this.frmRespostaPost.comorbidades.comorbidades5;
    imunosupressor === true ? (imunosupressor = 3) : (imunosupressor = 0);
    let hiv = this.frmRespostaPost.comorbidades.comorbidades6;
    hiv === true ? (hiv = 3) : (hiv = 0);
    let asplenia = this.frmRespostaPost.comorbidades.comorbidades7;
    asplenia === true ? (asplenia = 3) : (asplenia = 0);
    let transplantado = this.frmRespostaPost.comorbidades.comorbidades8;
    transplantado === true ? (transplantado = 3) : (transplantado = 0);
    let quimio = this.frmRespostaPost.comorbidades.comorbidades9;
    quimio === true ? (quimio = 3) : (quimio = 0);
    let outras = this.frmRespostaPost.comorbidades.comorbidades10;
    outras === true ? (outras = 3) : (outras = 0);
    let asma = this.frmRespostaPost.comorbidades.comorbidades11;
    asma === true ? (asma = 3) : (asma = 0);
    let renal = this.frmRespostaPost.comorbidades.comorbidades12;
    renal === true ? (renal = 3) : (renal = 0);
    let pneumopatias = this.frmRespostaPost.comorbidades.comorbidades13;
    pneumopatias === true ? (pneumopatias = 3) : (pneumopatias = 0);

    let postForm =
      febre +
      semSintomas +
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
      semComorbidade +
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

    let score = parseFloat(postForm);
    console.log(score);
    isNaN(score) ? 'sim' : 'não';

    if (isNaN(febre) === true || isNaN(epidemiologica) === true) {
      this.msgService.mensagemEnvioErro(
        'Marque pelo menos uma opção na seção Febre e uma opção na seção História Epidemiológica'
      );
    }

    if (score >= 10) {
      this.msgService.mensagemEnvioAlerta(
        'score: ' + score + ') Dirija-se ao Hospital mais próximo'
      );
    } else if (score < 10 && score >= 5) {
      this.msgService.mensagemEnvioAtencao(
        'score: ' +
          score +
          ') Realize o exame Antígeno nasal e Sorologia (Farmácia)'
      );
    } else if (score < 5 && score >= 0) {
      this.msgService.mensagemEnvioNegativo(
        'score: ' +
          score +
          ') Fique tranquilo,seu score não indica covid-19, mas caso um dos sintomas se agrave procure um médico'
      );
    }
    this.resetForm();
    this.disabledBtnDiagnostico = false;
  }
}
