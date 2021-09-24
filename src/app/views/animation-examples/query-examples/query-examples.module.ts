import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryExamplesRoutingModule } from './query-examples-routing.module';
import { QueryExamplesComponent } from './query-examples.component';


@NgModule({
  declarations: [
    QueryExamplesComponent
  ],
  imports: [
    CommonModule,
    QueryExamplesRoutingModule
  ]
})
export class QueryExamplesModule { }
