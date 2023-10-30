import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  nomeVisitante: string;

  constructor(
    private service: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    });
    this.nomeVisitante = this.service.nomeVisitante;
  }

  fazerLogin(): void {
    
    this.service.login(
      this.loginForm.controls['email'].value, 
      this.loginForm.controls['senha'].value
    ).subscribe(
      {
        next: (response) => {
          console.log(response);
          this.service.setAccessToken(response.token);
          // Navegação automática para a rota
          this.router.navigate(['/hello']);
        },
        error: (err) => {
          //console.log(err);
          Swal.fire("Login", err.error.mensagem, 'error');
        }
      }
    );
  }

  voltarHome() {
    this.router.navigate(['']);
  }

}
