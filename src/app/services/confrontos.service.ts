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
  private apiUrl = 'https://localhost:7049/api/Confrontos';

  constructor(private http: HttpClient) {}

  getConfrontos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}