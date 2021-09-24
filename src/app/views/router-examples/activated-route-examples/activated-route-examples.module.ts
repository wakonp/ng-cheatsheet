import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRouteExamplesRoutingModule } from './activated-route-examples-routing.module';
import { ActivatedRouteExamplesComponent } from './activated-route-examples.component';


@NgModule({
  declarations: [
    ActivatedRouteExamplesComponent
  ],
  imports: [
    CommonModule,
    ActivatedRouteExamplesRoutingModule
  ]
})
export class ActivatedRouteExamplesModule { }
