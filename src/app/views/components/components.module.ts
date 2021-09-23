import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { UtilModule } from 'src/app/util/util.module';
import { CONSTRUCTION_TITLE } from 'src/app/util/under-construction/under-construction.component';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [CommonModule, ComponentsRoutingModule, UtilModule],
  providers: [
    {
      provide: CONSTRUCTION_TITLE,
      useValue: $localize`Components`,
    },
  ],
})
export class ComponentsModule {}
