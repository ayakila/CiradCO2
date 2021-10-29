import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculGesComponent } from './calcul-ges.component';

const routes: Routes = [{
  path: '',
  component: CalculGesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculGesRoutingModule { }
