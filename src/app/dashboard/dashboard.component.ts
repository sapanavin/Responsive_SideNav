import { Component, HostListener, NgZoneOptions, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  innerWidth: any;
  
  constructor(){

  }
  
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.innerWidth = window.innerWidth;
  }
  getClass(){
    return this.innerWidth < 925 ? 'row-md' : 'row';
  }

}
