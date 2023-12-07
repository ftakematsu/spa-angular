import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = "http://localhost:8000/api";
  }

  cadastrarNovo(contato: any): Observable<any> {
    return this.http.post(this.apiUrl + "/contact", contato);
  }

  buscarTodos(): Observable<any> {
    return this.http.get(this.apiUrl + "/contacts");
  }

}
