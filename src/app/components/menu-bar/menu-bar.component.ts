import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  constructor(private router: Router) {}

  public homeNavigator() {
    console.log('a');
    this.router.navigateByUrl('/');
  }

  public motorcyclesNavigator() {
    console.log('a');
    this.router.navigateByUrl('/motorcycles');
  }

  public budgetNavigator() {
    console.log('a');
    this.router.navigateByUrl('/budget');
  }

  public visitNavigator() {
    console.log('a');
    this.router.navigateByUrl('/visit');
  }
}
