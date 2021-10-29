import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesResultatsComponent } from './mes-resultats.component';

const routes: Routes = [{
  path: '',
  component: MesResultatsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesResultatsRoutingModule { }
