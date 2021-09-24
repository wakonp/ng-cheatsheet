import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionExamplesRoutingModule } from './change-detection-examples-routing.module';
import { RouterExamplesRoutingModule } from '../../router-examples/router-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionExamplesRoutingModule,
    RouterExamplesRoutingModule,
  ],
})
export class ChangeDetectionExamplesModule {}
