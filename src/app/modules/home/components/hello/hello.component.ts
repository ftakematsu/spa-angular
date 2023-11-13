import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import Swal from 'sweetalert2';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '../../models/usuario';
import { NovoUsuarioComponent } from '../novo-usuario/novo-usuario.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, AfterViewInit {

  usuario: any;

  listaUsuarios: Usuario[];

  displayedColumns: string[] = ['id', 'nome', 'email', 'data_criacao'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatTable) table!: MatTable<Usuario>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: AuthService, private dialog: MatDialog) {
    this.listaUsuarios = [
      { id: 1, nome: "Fulano de Tal", email: "fulano@mail.com", data_criacao: "2023-11-13 15:56:00" },
      { id: 2, nome: "Beltrano de Tal", email: "beltrano@mail.com", data_criacao: "2023-11-13 15:58:00" },
    ];
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

  /**
   * Método carregado na inicialização da página.
   */
  ngOnInit(): void {
    /*this.service.usuarioLogado().subscribe({
      next: (response) => {
        // console.log(response);
        this.usuario = response.usuario;
        console.log(this.usuario);
      }
    });*/
    this.service.getUser().subscribe((user) => {
      this.usuario = user;
      console.log(this.usuario);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  atualizarListaUsuarios(usuario = null): void {
    if (usuario!=null) {
      this.listaUsuarios.push(usuario);
    }
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

  novoUsuarioFake() {
    /*let dadosUsuario = {
      name: "Fabio Takeshi",
      email: "fabio@mail.com",
      password: "novasenha"
    };
    this.service.novoUsuario(dadosUsuario).subscribe({
      next: (response) => {
        Swal.fire("Novo usuário", "Usuário cadastrado com sucesso!", 'success')
      }
    });*/
    let dialogRef = this.dialog.open(NovoUsuarioComponent);
    dialogRef.afterClosed().subscribe(usuario => {
      //this.dataSource = 
      this.atualizarListaUsuarios(usuario);
      this.table.renderRows();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
