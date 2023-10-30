import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(
    private service: AuthService
  ) {

  }

  /**
   * Método a ser executado na inicialização do componente.
   */
  ngOnInit() {
    this.service.usuarioLogado().subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }


}
