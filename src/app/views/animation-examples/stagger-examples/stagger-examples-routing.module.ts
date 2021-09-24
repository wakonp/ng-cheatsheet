import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaggerExamplesComponent } from './stagger-examples.component';

const routes: Routes = [{ path: '', component: StaggerExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaggerExamplesRoutingModule { }
