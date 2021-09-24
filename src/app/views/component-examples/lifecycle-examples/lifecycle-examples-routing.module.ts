import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleExamplesComponent } from './lifecycle-examples.component';
const routes: Routes = [
  {
    path: '',
    component: LifecycleExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifecycleExamplesRoutingModule {}
