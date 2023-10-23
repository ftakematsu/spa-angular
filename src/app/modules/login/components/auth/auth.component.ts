import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string;
  senha: string;

  constructor(private service: AuthService) {
    this.email = "";
    this.senha = "";
  }

  fazerLogin(): void {
    this.service.login(this.email, this.senha).subscribe((response) => {
      console.log(response);
    });
  }

}
