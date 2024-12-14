import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api-controle-de-jogos-internos.onrender.com';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  getConfrontos() {
    return this.http.get(`${this.apiUrl}/confrontos`);
  }

  atualizarConfrontos(confrontos: any, token: string) {
    return this.http.post(`${this.apiUrl}/confrontos`, confrontos, {
      headers: { Authorization: token },
    });
  }
}