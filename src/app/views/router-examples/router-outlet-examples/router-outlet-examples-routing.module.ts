import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutletExamplesComponent } from './router-outlet-examples.component';

const routes: Routes = [{ path: '', component: RouterOutletExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterOutletExamplesRoutingModule { }
