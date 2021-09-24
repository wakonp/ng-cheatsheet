import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardExamplesRoutingModule } from './guard-examples-routing.module';
import { GuardExamplesComponent } from './guard-examples.component';


@NgModule({
  declarations: [
    GuardExamplesComponent
  ],
  imports: [
    CommonModule,
    GuardExamplesRoutingModule
  ]
})
export class GuardExamplesModule { }
