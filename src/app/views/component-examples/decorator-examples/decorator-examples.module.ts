import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorExamplesRoutingModule } from './decorator-examples-routing.module';
import { DecoratorExamplesComponent } from './decorator-examples.component';

@NgModule({
  declarations: [DecoratorExamplesComponent],
  imports: [CommonModule, DecoratorExamplesRoutingModule],
})
export class DecoratorExamplesModule {}
