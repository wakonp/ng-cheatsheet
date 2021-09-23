import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { GuardsComponent } from './guards.component';
import { UtilModule } from 'src/app/util/util.module';
import { CONSTRUCTION_TITLE } from 'src/app/util/under-construction/under-construction.component';

@NgModule({
  declarations: [GuardsComponent],
  imports: [CommonModule, GuardsRoutingModule, UtilModule],
  providers: [
    {
      provide: CONSTRUCTION_TITLE,
      useValue: $localize`Guards`,
    },
  ],
})
export class GuardsModule {}
