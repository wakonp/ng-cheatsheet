import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionExamplesRoutingModule } from './change-detection-examples-routing.module';
import { ChangeDetectionExamplesComponent } from './change-detection-examples.component';

@NgModule({
  declarations: [ChangeDetectionExamplesComponent],
  imports: [CommonModule, ChangeDetectionExamplesRoutingModule],
})
export class ChangeDetectionExamplesModule {}
