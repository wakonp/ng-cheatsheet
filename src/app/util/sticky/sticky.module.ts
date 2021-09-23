import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyDirective } from './sticky.directive';
import { StickyBottomDirective } from './sticky-bottom.directive';
import { StickyTopDirective } from './sticky-top.directive';

@NgModule({
  declarations: [StickyDirective, StickyBottomDirective, StickyTopDirective],
  imports: [CommonModule],
  exports: [StickyDirective, StickyBottomDirective, StickyTopDirective],
})
export class StickyModule {}
