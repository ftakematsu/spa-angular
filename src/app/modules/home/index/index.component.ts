import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  nomeDigitado: string = "";

  enviar(): void {
    Swal.fire("Boa noite " + this.nomeDigitado);
  }

}
