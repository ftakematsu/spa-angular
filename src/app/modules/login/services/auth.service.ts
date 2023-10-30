import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAPI: string;

  constructor(private http: HttpClient) { 
    this.urlAPI = environment.apiUrl
  }

  setAccessToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token')!;
  }

  clearAccessToken(): void {
    localStorage.removeItem('access_token');
  }

  login(dadosLogin: AuthUser): Observable<any> {
    console.log(dadosLogin);
    return this.http.post<any>(this.urlAPI + "auth", dadosLogin);
  }

  /**
   * Passando o token do usuário autenticado para a requisição.
   */
  usuarioLogado(): Observable<any> {
    // Cabeçalho da requisição HTTP
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getAccessToken() 
    });
    return this.http.get<any>(this.urlAPI + "auth_user", {headers});
  }

}
