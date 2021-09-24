import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationExamplesRoutingModule } from './view-encapsulation-examples-routing.module';
import { RouterExamplesRoutingModule } from '../../router-examples/router-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ViewEncapsulationExamplesRoutingModule,
    RouterExamplesRoutingModule,
  ],
})
export class ViewEncapsulationExamplesModule {}
