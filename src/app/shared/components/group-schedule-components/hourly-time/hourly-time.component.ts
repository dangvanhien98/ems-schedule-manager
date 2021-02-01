import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brc-hourly-time',
  templateUrl: './hourly-time.component.html',
  styleUrls: ['./hourly-time.component.scss']
})
export class HourlyTimeComponent implements OnInit {

  @Input() hourStart: number;
  @Input() hourEnd: number;
  public hourArray: Array<number> = [];
  public flexPercent: number;
  public hourStartDefault = 8;
  public hourEndDefault = 19;
  constructor() { }

  ngOnInit(): void {
    this.checkValidInput();
    this.setFlexPercent();
    this.createHourlyArray();  
  }

  createHourlyArray() {
    for(var i = this.hourStart ; i < this.hourEnd; i++) {
      this.hourArray.push(i);
    }
  }

  setFlexPercent() {
    this.flexPercent = (100/((this.hourEnd-this.hourStart)));
  }

  checkValidInput() {
    if(this.hourStart < 0 && this.hourEnd < 0) {
      this.hourStart = this.hourStartDefault;
      this.hourEnd = this.hourEndDefault;
      return;
    }
    if(this.hourStart > this.hourEnd) {
      let temp = this.hourStart;
      this.hourStart = this.hourEnd;
      this.hourEnd = temp;
    }
    if(this.hourStart < 0 || this.hourStart > this.hourStartDefault || this.hourStart == undefined) {
      this.hourStart = this.hourStartDefault;
    }
    if(this.hourEnd < 0 || this.hourEnd < 20  || this.hourEnd >= 24  || this.hourEnd == undefined) {
      this.hourEnd = this.hourEndDefault;
    }
  }
  
}
