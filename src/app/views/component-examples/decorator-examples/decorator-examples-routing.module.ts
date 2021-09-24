import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorExamplesComponent } from './decorator-examples.component';

const routes: Routes = [
  {
    path: '',
    component: DecoratorExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecoratorExamplesRoutingModule {}
