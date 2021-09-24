import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationExamplesRoutingModule } from './animation-examples-routing.module';
import { RouterNavigationModule } from 'src/app/util/router-navigation/router-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    AnimationExamplesRoutingModule,
    RouterNavigationModule,
  ],
})
export class AnimationExamplesModule {}
