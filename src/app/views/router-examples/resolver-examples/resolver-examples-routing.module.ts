import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolverExamplesComponent } from './resolver-examples.component';

const routes: Routes = [{ path: '', component: ResolverExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverExamplesRoutingModule { }
