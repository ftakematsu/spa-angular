import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytasksComponent } from './mytasks/mytasks.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    MytasksComponent
  ],
  imports: [
    CommonModule, TasksRoutingModule
  ]
})
export class TasksModule { }
