import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolverExamplesRoutingModule } from './resolver-examples-routing.module';
import { ResolverExamplesComponent } from './resolver-examples.component';


@NgModule({
  declarations: [
    ResolverExamplesComponent
  ],
  imports: [
    CommonModule,
    ResolverExamplesRoutingModule
  ]
})
export class ResolverExamplesModule { }
