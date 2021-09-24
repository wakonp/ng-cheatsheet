import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationExamplesComponent } from './component-communication-examples.component';

const routes: Routes = [
  { path: '', component: ComponentCommunicationExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentCommunicationExamplesRoutingModule {}
