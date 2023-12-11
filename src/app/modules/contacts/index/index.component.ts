import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  nome: string;
  telefone: string;

  listaContatos: any[];

  constructor(private service: ContactsService) {
    this.nome = "";
    this.telefone = "";
    this.listaContatos = [];
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.service.buscarTodos().subscribe((response) => {
      this.listaContatos = response;
    });
  }


  cadastrarContato() {
    //alert(this.nome + this.telefone);
    let contato = {
      name: this.nome,
      phone: this.telefone
    };
    this.service.cadastrarNovo(contato).subscribe((response) => {
      Swal.fire(
        "Sucesso", "Contato cadastrado com sucesso!", 'success'
      );
      this.atualizarLista();
    });
  }

  excluir(contato: any) {
    Swal.fire({
      text: "Tem certeza?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((response) => {
      if (response.isConfirmed) {
        this.service.remover(contato.id).subscribe((response) => {
          this.atualizarLista();
        })
      }
    });
  }

  visualizar(contato: any) {
    

  }



}
