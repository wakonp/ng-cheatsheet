import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoriesRoutingModule } from './factories-routing.module';
import { FactoriesComponent } from './factories.component';
import { UtilModule } from 'src/app/util/util.module';
import { CONSTRUCTION_TITLE } from 'src/app/util/under-construction/under-construction.component';

@NgModule({
  declarations: [FactoriesComponent],
  imports: [CommonModule, FactoriesRoutingModule, UtilModule],
  providers: [
    {
      provide: CONSTRUCTION_TITLE,
      useValue: $localize`Factories`,
    },
  ],
})
export class FactoriesModule {}
