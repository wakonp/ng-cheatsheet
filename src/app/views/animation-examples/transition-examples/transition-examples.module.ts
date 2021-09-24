import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitionExamplesRoutingModule } from './transition-examples-routing.module';
import { TransitionExamplesComponent } from './transition-examples.component';


@NgModule({
  declarations: [
    TransitionExamplesComponent
  ],
  imports: [
    CommonModule,
    TransitionExamplesRoutingModule
  ]
})
export class TransitionExamplesModule { }
