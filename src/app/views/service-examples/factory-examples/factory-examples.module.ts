import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryExamplesRoutingModule } from './factory-examples-routing.module';
import { FactoryExamplesComponent } from './factory-examples.component';


@NgModule({
  declarations: [
    FactoryExamplesComponent
  ],
  imports: [
    CommonModule,
    FactoryExamplesRoutingModule
  ]
})
export class FactoryExamplesModule { }
