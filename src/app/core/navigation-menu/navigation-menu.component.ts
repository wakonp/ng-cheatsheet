import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  constructor() {}

  menuItems: MenuItem[] = [
    {
      name: $localize`Components`,
      path: '/components',
    },
    {
      name: $localize`Directives`,
      path: '/directives',
    },
    {
      name: $localize`Services`,
      path: '/services',
    },
    {
      name: $localize`Factories`,
      path: '/factories',
    },
    {
      name: $localize`Guards`,
      path: '/guards',
    },
    {
      name: $localize`Change Detection`,
      path: '/change-detection',
    },
    {
      name: $localize`Router`,
      path: '/router',
    },
  ];

  ngOnInit(): void {}
}
