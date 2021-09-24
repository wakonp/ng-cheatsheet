import { Component, Optional, SkipSelf } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {
  NavigationRoute,
  RouterNavigationRoute,
} from '../shared/router-navigation-route';

@Component({
  selector: 'app-router-navigation',
  templateUrl: './router-navigation.component.html',
  styleUrls: ['./router-navigation.component.scss'],
})
export class RouterNavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    @Optional()
    @SkipSelf()
    private parentNavigation: RouterNavigationComponent | null
  ) {}

  get hasParentNavigation() {
    return !!this.parentNavigation;
  }
  get routeConfig(): RouterNavigationRoute | null {
    return this.activatedRoute.routeConfig as RouterNavigationRoute | null;
  }

  get navigationMenuName() {
    return this.hasParentNavigation && this.activeParentNavigationName
      ? `${this.activeParentNavigationName} Menu`
      : 'Main Menu';
  }

  get navigationTitle() {
    return this.activeChildNavigationName;
  }

  get navigationRoutes(): NavigationRoute[] | undefined {
    return this.routeConfig?.children?.filter(
      (c) => c.data?.navigationMenuOptions
    );
  }

  private get activeChildNavigationName() {
    return this.activatedRoute.firstChild?.snapshot.data?.navigationMenuOptions
      ?.name;
  }
  private get activeParentNavigationName() {
    return this.activatedRoute.parent?.snapshot.data?.navigationMenuOptions
      ?.name;
  }
}
