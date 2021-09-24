import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaggerExamplesRoutingModule } from './stagger-examples-routing.module';
import { StaggerExamplesComponent } from './stagger-examples.component';


@NgModule({
  declarations: [
    StaggerExamplesComponent
  ],
  imports: [
    CommonModule,
    StaggerExamplesRoutingModule
  ]
})
export class StaggerExamplesModule { }
