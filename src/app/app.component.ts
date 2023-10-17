import { Component } from '@angular/core';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Responsive_Sidenav';
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSidenNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
    console.log('this.isSideNavCollapsed',this.isSideNavCollapsed);
    console.log('this.screenWidth',this.screenWidth);

  }
}
