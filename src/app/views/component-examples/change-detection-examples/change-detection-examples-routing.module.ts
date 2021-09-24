import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionExamplesComponent } from './change-detection-examples.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectionExamplesRoutingModule {}
