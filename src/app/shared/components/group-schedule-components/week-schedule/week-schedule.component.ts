import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { addDays } from 'date-fns';
import { Icon, ScheduleContent } from '../../../../store/models/schedule_content.i';

@Component({
  selector: 'brc-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss'],
})
export class WeekScheduleComponent implements OnInit, OnChanges {
  listDayInWeek: Object[] = [];
  @Input() isStories = false;
  @Input() isAddTodo: boolean = false;
  @Input() listDataSchedule: ScheduleContent[] = [];
  @Input() icon: Icon = {
    iconStart: '',
    iconEnd1: '',
    iconEnd2: '',
  };
  @Input() userId: number;
  @Input() dayFirstInWeek: Date;
  @Output() addTodo: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() addSchedule: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
   ngOnChanges() {
    if(this.dayFirstInWeek == undefined){
      this.dayFirstInWeek = new Date();
    }
    this.arrayDayInWeek(this.dayFirstInWeek);
   }
  clickAddTodo(data) {
    this.addTodo.emit(data);
  }

  clickAddSchedule(data) {
    this.addSchedule.emit(data);
  }

  getDetail(id: Number) {
    this.scheduleId.emit(id);
  }
  arrayDayInWeek(dayInWeek) {
    this.listDayInWeek = [];
    dayInWeek = this.dayFirstInWeek;
    for (let i = 0; i < 7; i++) {
      this.listDayInWeek.push(dayInWeek);
      dayInWeek = addDays(dayInWeek, 1);
    }
  }
}
