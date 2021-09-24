import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  static STORAGE_KEY: string = 'dark-mode-enabled';
  constructor(private renderer: Renderer2) {
    if (
      (window.localStorage.getItem(ThemeToggleComponent.STORAGE_KEY) ?? '0') ===
      '1'
    ) {
      this.toggleMode();
    }
  }

  get darkMode() {
    return this._darkMode;
  }
  set darkMode(value: boolean) {
    if (this._darkMode !== value) {
      const writeValue = value ? '1' : '0';
      window.localStorage.setItem(ThemeToggleComponent.STORAGE_KEY, writeValue);
      this._darkMode = value;
    }
  }
  private _darkMode = false;

  ngOnInit(): void {
    if (this.darkMode && !document.body.classList.contains('dark-mode')) {
      this.toggleMode();
    }
  }

  toggleMode() {
    if (this.darkMode) {
      this.renderer.removeClass(document.body, 'dark-mode');
      this.darkMode = false;
    } else {
      this.renderer.addClass(document.body, 'dark-mode');
      this.darkMode = true;
    }
  }
}
