import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectionExamplesRoutingModule } from './injection-examples-routing.module';
import { InjectionExamplesComponent } from './injection-examples.component';


@NgModule({
  declarations: [
    InjectionExamplesComponent
  ],
  imports: [
    CommonModule,
    InjectionExamplesRoutingModule
  ]
})
export class InjectionExamplesModule { }
