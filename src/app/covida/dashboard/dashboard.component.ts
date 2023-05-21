import { Component, OnInit } from '@angular/core';
import { Comorbidade } from 'src/app/model/comorbidade.model';
import { Resposta } from 'src/app/model/resposta.model';
import { Sintoma } from 'src/app/model/sintoma.model';
import { RespostaService } from '../../service/resposta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  id: any[] = [];

  febre: number[] = [];
  febre1: any;
  febre2: any;
  febre3: any;

  epidemiologica: any[] = [];
  epidemiologica1: any;
  epidemiologica2: any;

  sintoma1: any[] = [];
  sintoma2: any[] = [];
  sintoma3: any[] = [];
  sintoma4: any[] = [];
  sintoma5: any[] = [];
  sintoma6: any[] = [];
  sintoma7: any[] = [];
  sintoma8: any[] = [];
  sintoma9: any[] = [];
  sintoma10: any[] = [];
  sintoma11: any[] = [];
  sintoma12: any[] = [];

  sintomas1: any;
  sintomas2: any;
  sintomas3: any;
  sintomas4: any;
  sintomas5: any;
  sintomas6: any;
  sintomas7: any;
  sintomas8: any;
  sintomas9: any;
  sintomas10: any;
  sintomas11: any;
  sintomas12: any;

  comorbidade1: any[] = [];
  comorbidade2: any[] = [];
  comorbidade3: any[] = [];
  comorbidade4: any[] = [];
  comorbidade5: any[] = [];
  comorbidade6: any[] = [];
  comorbidade7: any[] = [];
  comorbidade8: any[] = [];
  comorbidade9: any[] = [];
  comorbidade10: any[] = [];
  comorbidade11: any[] = [];
  comorbidade12: any[] = [];
  comorbidade13: any[] = [];
  comorbidade14: any[] = [];

  comorbidades1: any;
  comorbidades2: any;
  comorbidades3: any;
  comorbidades4: any;
  comorbidades5: any;
  comorbidades6: any;
  comorbidades7: any;
  comorbidades8: any;
  comorbidades9: any;
  comorbidades10: any;
  comorbidades11: any;
  comorbidades12: any;
  comorbidades13: any;
  comorbidades14: any;

  contagem: number = 0;

  constructor(private respostaService: RespostaService) {}
  ngOnInit(): void {
    this.exibirRespostas();
  }

  exibirRespostas() {
    this.respostaService.listRespostas().subscribe(
      (respostas) => {
        respostas.forEach((resp) => {
          //Contagem
          this.id.push(resp.id);
          this.contagem = this.id.length;
          //Febre
          this.febre.push(resp.febre);
          this.febre1 = this.febre.filter((x) => x === 5).length;
          this.febre2 = this.febre.filter((x) => x === 3).length;
          this.febre3 = this.febre.filter((x) => x === 0).length;

          //Epidemiologia
          this.epidemiologica.push(resp.epidemiologica);
          this.epidemiologica1 = this.epidemiologica.filter(
            (x) => x === 5
          ).length;
          this.epidemiologica2 = this.epidemiologica.filter(
            (x) => x === 0
          ).length;
          //Sintomas
          this.sintoma1.push(resp.sintoma?.sintoma0);
          this.sintomas1 = this.sintoma1.filter((x) => x === true).length;

          this.sintoma2.push(resp.sintoma?.sintoma1);
          this.sintomas2 = this.sintoma2.filter((x) => x === true).length;

          this.sintoma3.push(resp.sintoma?.sintoma2);
          this.sintomas3 = this.sintoma3.filter((x) => x === true).length;

          this.sintoma4.push(resp.sintoma?.sintoma3);
          this.sintomas4 = this.sintoma4.filter((x) => x === true).length;

          this.sintoma5.push(resp.sintoma?.sintoma4);
          this.sintomas5 = this.sintoma5.filter((x) => x === true).length;

          this.sintoma6.push(resp.sintoma?.sintoma5);
          this.sintomas6 = this.sintoma6.filter((x) => x === true).length;

          this.sintoma7.push(resp.sintoma?.sintoma6);
          this.sintomas7 = this.sintoma7.filter((x) => x === true).length;

          this.sintoma8.push(resp.sintoma?.sintoma7);
          this.sintomas8 = this.sintoma8.filter((x) => x === true).length;

          this.sintoma9.push(resp.sintoma?.sintoma8);
          this.sintomas9 = this.sintoma9.filter((x) => x === true).length;

          this.sintoma10.push(resp.sintoma?.sintoma9);
          this.sintomas10 = this.sintoma10.filter((x) => x === true).length;

          this.sintoma11.push(resp.sintoma?.sintoma10);
          this.sintomas11 = this.sintoma11.filter((x) => x === true).length;

          this.sintoma12.push(resp.sintoma?.sintoma11);
          this.sintomas12 = this.sintoma12.filter((x) => x === true).length;

          //comorbidades
          this.comorbidade1.push(resp.comorbidade?.comorbidades0);
          this.comorbidades1 = this.comorbidade1.filter(
            (x) => x === true
          ).length;

          this.comorbidade2.push(resp.comorbidade?.comorbidades1);
          this.comorbidades2 = this.comorbidade2.filter(
            (x) => x === true
          ).length;

          this.comorbidade3.push(resp.comorbidade?.comorbidades2);
          this.comorbidades3 = this.comorbidade3.filter(
            (x) => x === true
          ).length;

          this.comorbidade4.push(resp.comorbidade?.comorbidades3);
          this.comorbidades4 = this.comorbidade4.filter(
            (x) => x === true
          ).length;

          this.comorbidade5.push(resp.comorbidade?.comorbidades4);
          this.comorbidades5 = this.comorbidade5.filter(
            (x) => x === true
          ).length;

          this.comorbidade6.push(resp.comorbidade?.comorbidades5);
          this.comorbidades6 = this.comorbidade6.filter(
            (x) => x === true
          ).length;

          this.comorbidade7.push(resp.comorbidade?.comorbidades6);
          this.comorbidades7 = this.comorbidade7.filter(
            (x) => x === true
          ).length;

          this.comorbidade8.push(resp.comorbidade?.comorbidades7);
          this.comorbidades8 = this.comorbidade8.filter(
            (x) => x === true
          ).length;

          this.comorbidade9.push(resp.comorbidade?.comorbidades8);
          this.comorbidades9 = this.comorbidade9.filter(
            (x) => x === true
          ).length;

          this.comorbidade10.push(resp.comorbidade?.comorbidades9);
          this.comorbidades10 = this.comorbidade10.filter(
            (x) => x === true
          ).length;

          this.comorbidade11.push(resp.comorbidade?.comorbidades10);
          this.comorbidades11 = this.comorbidade11.filter(
            (x) => x === true
          ).length;

          this.comorbidade12.push(resp.comorbidade?.comorbidades11);
          this.comorbidades12 = this.comorbidade12.filter(
            (x) => x === true
          ).length;

          this.comorbidade13.push(resp.comorbidade?.comorbidades12);
          this.comorbidades13 = this.comorbidade13.filter(
            (x) => x === true
          ).length;

          this.comorbidade14.push(resp.comorbidade?.comorbidades13);
          this.comorbidades14 = this.comorbidade14.filter(
            (x) => x === true
          ).length;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
