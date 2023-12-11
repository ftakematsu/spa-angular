import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.scss']
})
export class MytasksComponent {

  constructor(private service: TaskService) {

  }

  cadastrarTask() {
    // Criando um JSON para ser enviado
    // Supõe que isso virá de algum formulário
    let dadosTask = {
      name: "Task de teste",
      task_date: "2023-12-11" // Formato ISO String (yyyy-MM-dd)
    };

    // Chamando a API 
    this.service.cadastroTask(dadosTask)
      .subscribe((response) => {
        alert("Task cadastrado com sucesso!");
    })

  }
}
