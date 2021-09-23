import { Directive } from '@angular/core';

@Directive({
  selector: '[appSticky]',
  host: {
    '[style.position]': '"sticky"',
  },
})
export class StickyDirective {
  constructor() {}
}
