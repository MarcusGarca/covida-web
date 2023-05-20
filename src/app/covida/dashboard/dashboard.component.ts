import { Component, OnInit } from '@angular/core';
import { RespostaService } from '../../service/resposta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  resposta: any;

  constructor(private respostaService: RespostaService) {}
  ngOnInit(): void {
    this.exibirRespostas();
    console.log(this.exibirRespostas());
  }

  exibirRespostas() {
    this.respostaService.listRespostas().subscribe(
      (data) => {
        this.resposta = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
