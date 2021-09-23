import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { UtilModule } from 'src/app/util/util.module';
import { CONSTRUCTION_TITLE } from 'src/app/util/under-construction/under-construction.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, ServicesRoutingModule, UtilModule],
  providers: [
    {
      provide: CONSTRUCTION_TITLE,
      useValue: $localize`Services`,
    },
  ],
})
export class ServicesModule {}
