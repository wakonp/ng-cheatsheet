import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentExamplesRoutingModule } from './component-examples-routing.module';
import { RouterNavigationModule } from 'src/app/util/router-navigation/router-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentExamplesRoutingModule,
    RouterNavigationModule,
  ],
})
export class ComponentExamplesModule {}
