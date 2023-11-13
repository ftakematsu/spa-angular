import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HelloComponent } from './hello/hello.component';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    IndexComponent,
    HelloComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class HomeModule { }
