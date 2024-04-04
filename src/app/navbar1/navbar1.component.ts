import { Component, inject } from '@angular/core';
import { NavService } from '../Service/nav.service';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component {
  data: any;
  private subscription: Subscription;

  constructor(private navService: NavService) {
    this.subscription = this.navService.data$.subscribe(data => {
      // this.data = 'data'));
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
