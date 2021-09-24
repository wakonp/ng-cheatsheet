import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectiveExamplesRoutingModule } from './structural-directive-examples-routing.module';
import { StructuralDirectiveExamplesComponent } from './structural-directive-examples.component';


@NgModule({
  declarations: [
    StructuralDirectiveExamplesComponent
  ],
  imports: [
    CommonModule,
    StructuralDirectiveExamplesRoutingModule
  ]
})
export class StructuralDirectiveExamplesModule { }
