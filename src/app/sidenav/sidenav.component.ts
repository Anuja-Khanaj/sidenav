import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
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



