import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionExamplesRoutingModule } from './content-projection-examples-routing.module';
import { ContentProjectionExamplesComponent } from './content-projection-examples.component';

@NgModule({
  declarations: [ContentProjectionExamplesComponent],
  imports: [CommonModule, ContentProjectionExamplesRoutingModule],
})
export class ContentProjectionExamplesModule {}
