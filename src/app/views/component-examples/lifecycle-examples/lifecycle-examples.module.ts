import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleExamplesRoutingModule } from './lifecycle-examples-routing.module';
import { LifecycleExamplesComponent } from './lifecycle-examples.component';

@NgModule({
  declarations: [LifecycleExamplesComponent],
  imports: [CommonModule, LifecycleExamplesRoutingModule],
})
export class LifecycleExamplesModule {}
