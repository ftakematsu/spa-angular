import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthUser } from '../../models/auth-user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string;
  senha: string;

  loginForm: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router
  ) {
    this.email = "";
    this.senha = "";
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
  }

  fazerLogin(): void {
    if (this.loginForm.valid) {
      let dadosLogin: AuthUser;
      dadosLogin = new AuthUser(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['senha'].value
      );
      this.service.login(dadosLogin).subscribe({
        next: (response) => {
          this.router.navigate(['/hello']);
        },
        error: (response) => {
          Swal.fire('Login', response.error.mensagem, 'error');
        }
      });
    }
    else {
      Swal.fire('Login', "Confira os dados do formulário!", 'warning');
    }
  }

}
