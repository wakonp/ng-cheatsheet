import {
  Component,
  OnDestroy,
  OnInit,
  Optional,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {
  NavigationRoute,
  RouterNavigationRoute,
} from '../shared/router-navigation-route';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-router-navigation',
  templateUrl: './router-navigation.component.html',
  styleUrls: ['./router-navigation.component.scss'],
})
export class RouterNavigationComponent implements OnInit, OnDestroy {
  @ViewChild(MatSidenav) sideNav: MatSidenav | undefined = undefined;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  childNavigations: RouterNavigationComponent[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    @Optional()
    @SkipSelf()
    private parentNavigation: RouterNavigationComponent | null
  ) {}

  get hasParentNavigation() {
    return this.parentNavigation != null;
  }
  get mainNavigation(): RouterNavigationComponent {
    let instance: RouterNavigationComponent = this;
    while (instance.parentNavigation !== null) {
      instance = instance.parentNavigation;
    }
    return instance;
  }

  get routeConfig(): RouterNavigationRoute | null {
    return this.activatedRoute.routeConfig as RouterNavigationRoute | null;
  }
  private get activeChildNavigationName() {
    return this.activatedRoute.firstChild?.snapshot.data?.navigationMenuOptions
      ?.name;
  }
  private get activeParentNavigationName() {
    return this.activatedRoute.parent?.snapshot.data?.navigationMenuOptions
      ?.name;
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

  ngOnInit() {
    this.mainNavigation.childNavigations.push(this);
  }
  ngOnDestroy() {
    this.mainNavigation.childNavigations =
      this.mainNavigation.childNavigations.filter((c) => c !== this);
  }
}
