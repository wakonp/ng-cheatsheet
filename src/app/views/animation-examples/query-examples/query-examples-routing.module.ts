import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryExamplesComponent } from './query-examples.component';

const routes: Routes = [{ path: '', component: QueryExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryExamplesRoutingModule { }
