import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardExamplesComponent } from './guard-examples.component';

const routes: Routes = [{ path: '', component: GuardExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardExamplesRoutingModule { }
