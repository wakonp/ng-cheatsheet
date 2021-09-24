import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorExamplesComponent } from './selector-examples.component';

const routes: Routes = [
  {
    path: '',
    component: SelectorExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectorExamplesRoutingModule {}
