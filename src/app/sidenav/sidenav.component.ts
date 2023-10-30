import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, fadeInOut } from './helper';
import { Router } from '@angular/router';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    fadeInOut,
    trigger('rotate',[
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'})
        ])
        
        )
      ]),
      
    ])
  ]
})
export class SidenavComponent implements OnInit{
  
  @Output() onToggleSidenNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;


    @HostListener('window:resize', ['$event'])
      onResize(event:any){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 768) {
        //console.log("from sidenav.ts" , window.innerWidth);
        this.collapsed = false;
        this.onToggleSidenNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
      }
    }
    constructor(public router: Router){
      
    }
  
      ngOnInit(): void {
      this.screenWidth = window.innerWidth;
    }

    toggleCollapse(): void{
      this.collapsed = !this.collapsed;
      this.onToggleSidenNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
    }

closeSidenav():void{
  this.collapsed = false;
  this.onToggleSidenNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
}

handleClick(item: INavbarData):void{
console.log("inside handleClick", item);
  this.shrinkItems(item);
    item.expanded = !item.expanded;
}

getActiveClass(data:INavbarData): string{
    return this.router.url.includes(data.routeLink) ? 'active':'';
}

shrinkItems(item: INavbarData): void {
  if(!this.multiple){
    for(let modelItem of this.navData){
      if(item !== modelItem && modelItem.expanded){
        modelItem.expanded = false;
      }
    }
  }
}




}
