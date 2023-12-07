import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule, MatIconModule, MatButtonModule,
    FormsModule, MatInputModule, MatFormFieldModule,
    ReactiveFormsModule, ContactsRoutingModule
  ]
})
export class ContactsModule { }