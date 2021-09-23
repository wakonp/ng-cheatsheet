import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyModule } from './sticky/sticky.module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    UnderConstructionComponent
  ],
  imports: [CommonModule],
  exports: [StickyModule, UnderConstructionComponent],
})
export class UtilModule {}
