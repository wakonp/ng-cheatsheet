import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { RouterComponent } from './router.component';
import { UtilModule } from 'src/app/util/util.module';
import { CONSTRUCTION_TITLE } from 'src/app/util/under-construction/under-construction.component';

@NgModule({
  declarations: [RouterComponent],
  imports: [CommonModule, RouterRoutingModule, UtilModule],
  providers: [
    {
      provide: CONSTRUCTION_TITLE,
      useValue: $localize`Router`,
    },
  ],
})
export class RouterModule {}
