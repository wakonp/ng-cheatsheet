import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveExamplesRoutingModule } from './directive-examples-routing.module';
import { RouterNavigationModule } from 'src/app/util/router-navigation/router-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveExamplesRoutingModule,
    RouterNavigationModule,
  ],
})
export class DirectiveExamplesModule {}
