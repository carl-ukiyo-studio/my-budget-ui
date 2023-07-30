import { Component, inject, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgIf,
    RouterLink
  ]
})
export class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset = signal(false);

  ngOnInit() {
    this.initBreakpointObserver();
  }

  private initBreakpointObserver() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(
      bs => {
        this.isHandset.set(bs.matches)
      }
    )
  }
}
