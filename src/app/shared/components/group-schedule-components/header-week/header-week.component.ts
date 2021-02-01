import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { addDays } from "date-fns";

@Component({
  selector: 'brc-header-week',
  templateUrl: './header-week.component.html',
  styleUrls: ['./header-week.component.scss']
})
export class HeaderWeekComponent implements OnInit, OnChanges {

  @Input() date: Date;
  @Output() dailySchedule: EventEmitter<any> = new EventEmitter<any>();
  @Output() firstDayOfWeek: EventEmitter<any> = new EventEmitter<any>();
  listDay: Date[] = [];
  constructor() { }
  
  ngOnInit(): void {
    this.createListDate(this.date);
  }
  ngOnChanges(){ 
    this.createListDate(this.date);
  }

  handleWeek(date: Date){
    this.createListDate(date);
    this.firstDayOfWeek.emit(date);
  }

  createListDate(date: Date){
    this.listDay = [];
    const d = date;
    for (let i = 0; i < 7; i++) {
      this.listDay.push(addDays(d, i));
    }
  }

  scheduleOfDate(date: Date){
    this.dailySchedule.emit(date);
  }

}
