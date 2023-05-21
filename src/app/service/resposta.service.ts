import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resposta } from '../model/resposta.model';

@Injectable({
  providedIn: 'root',
})
export class RespostaService {
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Método GET repostas enviadas
  listRespostas(): Observable<Resposta[]> {
    return this.http.get<Resposta[]>(`${this.apiURL}/respostas`);
  }

  // Método POST para registrar uma nova
  salvarResposta(resposta: any): Observable<Resposta> {
    return this.http.post<Resposta>(`${this.apiURL}/respostas`, resposta).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e))
    );
  }
  error(e: any): Observable<any> {
    return throwError(() => 'error');
  }
}
