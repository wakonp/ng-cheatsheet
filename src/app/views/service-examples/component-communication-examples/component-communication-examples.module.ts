import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationExamplesRoutingModule } from './component-communication-examples-routing.module';
import { ComponentCommunicationExamplesComponent } from './component-communication-examples.component';

@NgModule({
  declarations: [ComponentCommunicationExamplesComponent],
  imports: [CommonModule, ComponentCommunicationExamplesRoutingModule],
})
export class ComponentCommunicationExamplesModule {}
