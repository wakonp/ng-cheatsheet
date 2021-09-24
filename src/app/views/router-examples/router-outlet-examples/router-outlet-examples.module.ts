import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutletExamplesRoutingModule } from './router-outlet-examples-routing.module';
import { RouterOutletExamplesComponent } from './router-outlet-examples.component';


@NgModule({
  declarations: [
    RouterOutletExamplesComponent
  ],
  imports: [
    CommonModule,
    RouterOutletExamplesRoutingModule
  ]
})
export class RouterOutletExamplesModule { }
