import { Component, OnInit, ViewChildren, ElementRef, HostListener } from '@angular/core';


@Component({
  host: {
    '(document:click)': 'reset($event)',
    '(document:keydown)': 'reset($event)'
  },
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @ViewChildren('tooltip') tooltips;
  
  showLeft=false;
  showRight=false;
  tooltipText = '';

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  showRightTooltip(){
    this.showRight = true;
    this.showLeft = false;
    this.tooltipText = 'Right';    
    if (this.showRight) {
      setTimeout(() => {
        this.tooltips._results.forEach(item => item.show());
      }, 5)
    } else {
       this.tooltips._results.forEach(item => item.hide());
    }   
   
  }
  
  showLeftTooltip(){
    this.showLeft = true;
    this.showRight = false;
    this.tooltipText = 'Left';
    if (this.showLeft) {
      setTimeout(() => {
        this.tooltips._results.forEach(item => item.show());
      }, 5)
    } else {
      this.tooltips._results.forEach(item => item.hide());
    }
       
  }    

  reset(event){    
  
    if (!this._eref.nativeElement.contains(event.target) || event.keyCode == 27)
    {      
      this.showLeft = false;
      this.showRight = false;
      setTimeout(() => {
        this.tooltips._results.forEach(item => item.hide());
      }, 5)
    }
     
  }

}
