import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  nomeDigitado: string = "";

  constructor(
    private router: Router,
    private service: AuthService
  ) {

  }

  enviar(): void {
    Swal.fire("Boa noite " + this.nomeDigitado);
  }

  irParaLogin() {
    this.service.nomeVisitante = this.nomeDigitado;
    this.router.navigate(['auth/login']);
  }

}
