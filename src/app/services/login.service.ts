import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // O serviço será acessível globalmente
})
export class LoginService {
  private apiUrl = 'https://api-controle-de-jogos-internos.onrender.com/login';

  constructor(private http: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    const loginPayload = { username: usuario, password: senha };
    return this.http.post(this.apiUrl, loginPayload); // Retorna o Observable da requisição HTTP
  }
}