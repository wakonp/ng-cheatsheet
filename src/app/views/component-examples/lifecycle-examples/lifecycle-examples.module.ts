import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleExamplesRoutingModule } from './lifecycle-examples-routing.module';
import { RouterExamplesRoutingModule } from '../../router-examples/router-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LifecycleExamplesRoutingModule,
    RouterExamplesRoutingModule,
  ],
})
export class LifecycleExamplesModule {}
