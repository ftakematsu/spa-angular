import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models/usuario';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent {
  nomeUsuario: string = "";
  emailUsuario: string = "";
  senhaUsuario: string = "";

  constructor(
    private dialogRef: MatDialogRef<NovoUsuarioComponent>,
    private userService: UsersService
  ) {

  }

  enviarUsuario() {
    let usuario: Usuario;
    usuario = new Usuario(
      Math.floor(Math.random()*100000),
      this.nomeUsuario,
      this.emailUsuario,
      "2023-11-13 16:30:00",
      this.senhaUsuario
    );

    this.userService.cadastrarUsuario(usuario).subscribe((response) => {
      this.dialogRef.close(response);
    });
    
  }



}
