import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:8000/api"
  }

  cadastrarUsuario(user: Usuario): Observable<any> {
    let body = {
      name: user.nome,
      email: user.email,
      password: user.senha
    };
    return this.http.post(this.apiUrl+"/user", body);
  }

  buscarUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl+"/users");
  }

}
