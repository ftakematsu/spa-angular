import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  usuario: any;

  constructor(private service: AuthService) {

  }

  /**
   * Método carregado na inicialização da página.
   */
  ngOnInit(): void {
    this.service.usuarioLogado().subscribe({
      next: (response) => {
        // console.log(response);
        this.usuario = response.usuario;
        console.log(this.usuario);
      }
    });
  }

  novoUsuarioFake() {
    let dadosUsuario = {
      name: "Fabio Takeshi",
      email: "fabio@mail.com",
      password: "novasenha"
    };
    this.service.novoUsuario(dadosUsuario).subscribe({
      next: (response) => {
        Swal.fire("Novo usuário", "Usuário cadastrado com sucesso!", 'success')
      }
    });
  }

}
