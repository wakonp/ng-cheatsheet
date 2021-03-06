import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterNavigationComponent } from './router-navigation/router-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { GithubProjectLinkComponent } from './github-project-link/github-project-link.component';

@NgModule({
  declarations: [RouterNavigationComponent, NavigationMenuComponent, ThemeToggleComponent, GithubProjectLinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class RouterNavigationModule {}
