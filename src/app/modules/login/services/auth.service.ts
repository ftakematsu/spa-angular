import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAPI: string;

  constructor(private http: HttpClient) { 
    this.urlAPI = "http://127.0.0.1:8000/api/"
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

  login(usuario: string, senha: string): Observable<any> {
    return this.http.post<any>(this.urlAPI + "auth", {
      login: usuario,
      password: senha
    });
  }

}
