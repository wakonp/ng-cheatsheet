import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLinkExamplesRoutingModule } from './router-link-examples-routing.module';
import { RouterLinkExamplesComponent } from './router-link-examples.component';


@NgModule({
  declarations: [
    RouterLinkExamplesComponent
  ],
  imports: [
    CommonModule,
    RouterLinkExamplesRoutingModule
  ]
})
export class RouterLinkExamplesModule { }
