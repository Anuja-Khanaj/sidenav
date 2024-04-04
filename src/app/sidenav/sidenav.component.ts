import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../Service/nav.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  title = 'material-responsive-sidenav';
  isMobile = false;
  isdisplay = false;
  issideView = false;
  islist = true;
  observer:BreakpointObserver  = inject(BreakpointObserver);

  menuItems: MenuItem[] = [
    { label: 'Dashboard', iconClass: 'fa-solid fa-house' },
    { label: 'Posts', iconClass: 'fa-solid fa-square-pen' },
    { label: 'Media', iconClass: 'fa-solid fa-image' },
    { label: 'Pages', iconClass: 'fa-regular fa-file-lines' },
    { label: 'Comments', iconClass: 'fa-regular fa-comment-dots' },
    { label: 'Appearance', iconClass: 'fa-solid fa-border-all' },
    { label: 'Plugins', iconClass: 'fa-solid fa-bag-shopping' },
  ];

  menuItems2: MenuItem[] =[
    { label: 'Settings', iconClass: 'fa-solid fa-gear' },
    { label: 'Tools', iconClass: 'fa-solid fa-sliders' }
  ]
  constructor(private navsevice:NavService) {}

  sendDataToNavbar(data: any) {
    this.navsevice.sendData(data);
  }

  ngOnInit(){
    this.observer.observe(['(max-width: 1000px)']).subscribe((screenSize)=>{
      if(screenSize.matches){
        this.isMobile = true;
        this.islist = false
        this.isdisplay = false;
      }
      else{
        this.isMobile = false;
      }
    })
  }
  display(){
    this.isdisplay = !this.isdisplay;
  }
  closebtn(){
    this.isdisplay = false
  }
  hover(){
    this.issideView = !this.issideView;
    this.isdisplay = false;
  }
}

interface MenuItem {
  label: string;
 iconClass: string;
 iconClass2?: String;
 ulItem?:string[];
}


