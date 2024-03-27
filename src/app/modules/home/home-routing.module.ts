import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
