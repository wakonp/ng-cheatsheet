import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEncapsulationExamplesComponent } from './view-encapsulation-examples.component';

const routes: Routes = [
  {
    path: '',
    component: ViewEncapsulationExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEncapsulationExamplesRoutingModule {}
