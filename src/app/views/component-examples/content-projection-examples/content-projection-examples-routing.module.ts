import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionExamplesComponent } from './content-projection-examples.component';

const routes: Routes = [
  {
    path: '',
    component: ContentProjectionExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentProjectionExamplesRoutingModule {}
