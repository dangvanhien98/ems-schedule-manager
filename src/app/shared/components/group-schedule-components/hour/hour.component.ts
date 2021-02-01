import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brc-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent implements OnInit {

  @Input() hourNumber: number;
  public dynamicColorPrevious : string;
  public dynamicColorNext : string;
  constructor() { }

  ngOnInit(): void {
    if( (this.hourNumber > 7 && this.hourNumber < 11)  || (this.hourNumber > 12 && this.hourNumber < 17 )) {
      this.dynamicColorPrevious = "white";
      this.dynamicColorNext = "white";
    }else if(this.hourNumber == 11 ||  this.hourNumber == 17) {
      this.dynamicColorPrevious = "white";
      this.dynamicColorNext ="rgb(228, 227, 227)";
    }else{
      this.dynamicColorPrevious = "rgb(228, 227, 227)";
      this.dynamicColorNext = "rgb(228, 227, 227)";
    }
  }

}
