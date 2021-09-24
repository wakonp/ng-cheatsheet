import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorExamplesRoutingModule } from './selector-examples-routing.module';
import { RouterExamplesRoutingModule } from '../../router-examples/router-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SelectorExamplesRoutingModule,
    RouterExamplesRoutingModule,
  ],
})
export class SelectorExamplesModule {}
