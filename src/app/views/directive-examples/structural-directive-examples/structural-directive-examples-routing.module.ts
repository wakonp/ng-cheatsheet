import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectiveExamplesComponent } from './structural-directive-examples.component';

const routes: Routes = [{ path: '', component: StructuralDirectiveExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectiveExamplesRoutingModule { }
