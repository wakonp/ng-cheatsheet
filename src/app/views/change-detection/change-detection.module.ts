import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { UtilModule } from 'src/app/util/util.module';
import { CONSTRUCTION_TITLE } from 'src/app/util/under-construction/under-construction.component';

@NgModule({
  declarations: [ChangeDetectionComponent],
  imports: [CommonModule, ChangeDetectionRoutingModule, UtilModule],
  providers: [
    {
      provide: CONSTRUCTION_TITLE,
      useValue: $localize`Change Detection`,
    },
  ],
})
export class ChangeDetectionModule {}
