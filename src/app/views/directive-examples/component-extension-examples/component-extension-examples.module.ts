import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentExtensionExamplesRoutingModule } from './component-extension-examples-routing.module';
import { ComponentExtensionExamplesComponent } from './component-extension-examples.component';


@NgModule({
  declarations: [
    ComponentExtensionExamplesComponent
  ],
  imports: [
    CommonModule,
    ComponentExtensionExamplesRoutingModule
  ]
})
export class ComponentExtensionExamplesModule { }
