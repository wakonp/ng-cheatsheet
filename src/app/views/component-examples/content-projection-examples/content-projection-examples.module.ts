import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionExamplesRoutingModule } from './content-projection-examples-routing.module';
import { RouterExamplesRoutingModule } from '../../router-examples/router-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContentProjectionExamplesRoutingModule,
    RouterExamplesRoutingModule,
  ],
})
export class ContentProjectionExamplesModule {}
