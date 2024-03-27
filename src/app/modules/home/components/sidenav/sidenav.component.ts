import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/login/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  user: any = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.usuarioLogado().subscribe({
      next: (response) => {
        console.log("Usuário", response);
        this.authService.setUser(response.usuario);
        this.user = response.usuario;
      },
      error: (response) => {
        console.log("Status: " + response.status);
        this.authService.setUser(null);
      }
    });
  }

  irParaPaginaLogin() {
    this.router.navigate(['/auth/login']);
  }

  fazerLogoff() {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/']);
      }
    });
    //this.authService.clearAccessToken();
  }
}
