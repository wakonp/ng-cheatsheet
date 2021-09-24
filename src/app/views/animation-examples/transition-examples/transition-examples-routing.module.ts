import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransitionExamplesComponent } from './transition-examples.component';

const routes: Routes = [{ path: '', component: TransitionExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitionExamplesRoutingModule { }
