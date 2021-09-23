import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSticky][appStickyTop]',
})
export class StickyTopDirective {
  constructor() {}
  @HostBinding('style.top') top: number = 0;
  @Input() set appStickyTop(top: string) {
    this.top = parseFloat(top);
  }
}
