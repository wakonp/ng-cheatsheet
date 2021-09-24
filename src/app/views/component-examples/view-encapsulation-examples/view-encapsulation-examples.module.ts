import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationExamplesRoutingModule } from './view-encapsulation-examples-routing.module';
import { ViewEncapsulationExamplesComponent } from './view-encapsulation-examples.component';

@NgModule({
  declarations: [ViewEncapsulationExamplesComponent],
  imports: [CommonModule, ViewEncapsulationExamplesRoutingModule],
})
export class ViewEncapsulationExamplesModule {}
