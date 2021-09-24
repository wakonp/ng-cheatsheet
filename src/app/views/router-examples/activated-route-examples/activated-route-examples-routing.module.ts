import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRouteExamplesComponent } from './activated-route-examples.component';

const routes: Routes = [{ path: '', component: ActivatedRouteExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivatedRouteExamplesRoutingModule { }
