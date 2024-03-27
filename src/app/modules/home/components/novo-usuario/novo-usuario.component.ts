import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent {
  nomeUsuario: string = "";
  emailUsuario: string = "";

  constructor(private dialogRef: MatDialogRef<NovoUsuarioComponent>) {

  }

  enviarUsuario() {
    let usuario: Usuario;
    usuario = new Usuario(
      Math.floor(Math.random()*100000),
      this.nomeUsuario,
      this.emailUsuario,
      "2023-11-13 16:30:00"
    );
    this.dialogRef.close(usuario);
  }



}
