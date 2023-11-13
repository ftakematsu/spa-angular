import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../login/services/auth.service';
import { MatTable } from '@angular/material/table';
import { Usuario } from '../models/usuario';
import { MatDialog } from '@angular/material/dialog';
import { NovoUsuarioComponent } from '../components/novo-usuario/novo-usuario.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  listaUsuarios: Usuario[];

  displayedColumns: string[] = ['id', 'nome', 'email', 'data_criacao'];
  dataSource: Usuario[] = [];

  constructor(
    private service: AuthService, private dialog: MatDialog
  ) {
    this.listaUsuarios = [
      { id: 1, nome: "Fulano de Tal", email: "fulano@mail.com", data_criacao: "2023-11-13 15:56:00" },
      { id: 2, nome: "Beltrano de Tal", email: "beltrano@mail.com", data_criacao: "2023-11-13 15:58:00" },
    ];
    this.dataSource = [...this.listaUsuarios];
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

  

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    let dialogRef = this.dialog.open(NovoUsuarioComponent);
    dialogRef.afterClosed().subscribe(usuario => {
      this.dataSource.push(usuario);
      this.table.renderRows();
    });
  }

  removeData() {
    //\this.dataSource.pop();
    this.table.renderRows();
  }


}
