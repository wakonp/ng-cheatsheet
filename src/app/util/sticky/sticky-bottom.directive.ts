import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSticky][appStickyBottom]',
})
export class StickyBottomDirective {
  constructor() {}
  @HostBinding('style.bottom') bottom: number = 0;
  @Input() set appStickyTop(bottom: string) {
    this.bottom = parseFloat(bottom);
  }
}
