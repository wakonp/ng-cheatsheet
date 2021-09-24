import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceExamplesRoutingModule } from './service-examples-routing.module';
import { RouterNavigationModule } from 'src/app/util/router-navigation/router-navigation.module';

@NgModule({
  imports: [CommonModule, ServiceExamplesRoutingModule, RouterNavigationModule],
})
export class ServiceExamplesModule {}
