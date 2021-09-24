import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorExamplesRoutingModule } from './decorator-examples-routing.module';
import { RouterExamplesRoutingModule } from '../../router-examples/router-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DecoratorExamplesRoutingModule,
    RouterExamplesRoutingModule,
  ],
})
export class DecoratorExamplesModule {}
