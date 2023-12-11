import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  cadastroTask(task: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/tasks', task);
  }


}
