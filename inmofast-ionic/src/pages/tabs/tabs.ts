import { Component } from '@angular/core';



import {
  ProfilePage,
  AboutPage,
  HomePage
} from '../pages.index'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
