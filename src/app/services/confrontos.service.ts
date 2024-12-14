import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Partida {
  timeA: string;
  timeB: string;
  horario: string;
  resultado: string | null;
}

export interface Confronto {
  data: string;
  partidas: Partida[];
}

export interface ConfrontosResponse {
  confrontos: Confronto[];
}

@Injectable({
  providedIn: 'root',
})
export class ConfrontosService {
  private apiUrl = 'https://api-controle-de-jogos-internos.onrender.com/confrontos';

  constructor(private http: HttpClient) {}

  getConfrontos(): Observable<ConfrontosResponse> {
    return this.http.get<ConfrontosResponse>(this.apiUrl, {withCredentials: true})
  }

  atualizarConfrontos(payload: any) {
    const token = payload.token;
    const confronto = payload.confronto;
  
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    return this.http.post(this.apiUrl, confronto, { headers });
  }
}