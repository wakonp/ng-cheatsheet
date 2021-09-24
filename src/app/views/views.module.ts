import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { RouterNavigationModule } from '../util/router-navigation/router-navigation.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ViewsRoutingModule, RouterNavigationModule],
})
export class ViewsModule {}
