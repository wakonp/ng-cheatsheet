import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterExamplesRoutingModule } from './router-examples-routing.module';
import { RouterNavigationModule } from 'src/app/util/router-navigation/router-navigation.module';

@NgModule({
  imports: [CommonModule, RouterExamplesRoutingModule, RouterNavigationModule],
})
export class RouterExamplesModule {}
