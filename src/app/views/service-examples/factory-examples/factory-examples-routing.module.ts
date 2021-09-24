import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryExamplesComponent } from './factory-examples.component';

const routes: Routes = [{ path: '', component: FactoryExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryExamplesRoutingModule { }
