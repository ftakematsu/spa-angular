import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user';
import { environment } from 'src/environments/environment.development';
import { ACCESS_TOKEN_VAR } from 'src/app/consts/system-consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAPI: string;
  private _user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { 
    this.urlAPI = environment.apiUrl;
  }

  setUser(user: any): void {
    this._user.next(user);
  }

  getUser(): Observable<any> {
    return this._user.asObservable();
  }

  setAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN_VAR, token);
  }

  getAccessToken(): string {
    return localStorage.getItem(ACCESS_TOKEN_VAR)!;
  }

  clearAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_VAR);
  }

  login(dadosLogin: AuthUser): Observable<any> {
    console.log(dadosLogin);
    return this.http.post<any>(this.urlAPI + "auth", dadosLogin);
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.urlAPI + "logout", {});
  }

  /**
   * Passando o token do usuário autenticado para a requisição.
   */
  usuarioLogado(): Observable<any> {
    // Cabeçalho da requisição HTTP
    /*const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getAccessToken() 
    });*/
    return this.http.get<any>(this.urlAPI + "user");
  }

  novoUsuario(dadosUsuario: any) : Observable<any> {
    return this.http.post<any>(this.urlAPI + "user", dadosUsuario);
  }

}
