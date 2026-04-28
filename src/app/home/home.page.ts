import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  MenuController,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar],
})
export class HomePage {
  constructor(private menuCtrl: MenuController, private router: Router) {}

  openFirstMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    /**
     * Open the menu by side
     * We can refer to the menu by side
     * here because only one "end" menu exists
     */
    this.menuCtrl.open('end');
  }
  goToApp(){
    this.router.navigate(['/post'])
  }
}