import { Component, Input, OnInit } from '@angular/core';
import { RouterNavigationComponent } from '../router-navigation/router-navigation.component';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  constructor() {}
  @Input() navigationItems: RouterNavigationComponent[] | undefined = undefined;

  ngOnInit(): void {}
}
