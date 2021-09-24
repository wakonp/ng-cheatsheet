import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorExamplesRoutingModule } from './selector-examples-routing.module';
import { SelectorExamplesComponent } from './selector-examples.component';

@NgModule({
  declarations: [SelectorExamplesComponent],
  imports: [CommonModule, SelectorExamplesRoutingModule],
})
export class SelectorExamplesModule {}
