import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isSunday, isSaturday } from "date-fns";

@Component({
  selector: 'brc-day-in-week',
  templateUrl: './day-in-week.component.html',
  styleUrls: ['./day-in-week.component.scss']
})
export class DayInWeekComponent implements OnInit {

  @Input() date: Date;
  @Output() dailySchedule: EventEmitter<any> = new EventEmitter<any>();
  color: string = ' #4F4F4F';

  constructor() { }

  ngOnInit(): void {
    if(isSaturday(this.date)) {
      this.color = 'orange';
    }

    if(isSunday(this.date)) {
      this.color = 'red';
    }
  }

  dailySchedules(){
    this.dailySchedule.emit(this.date);
  }
}
