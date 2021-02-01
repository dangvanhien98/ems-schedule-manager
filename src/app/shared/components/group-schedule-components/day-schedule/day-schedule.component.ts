import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Icon,
  ScheduleContent,
} from '../../../../store/models/schedule_content.i';
import {
  addDays,
  differenceInDays,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
} from 'date-fns';
import { ConvertDateStories } from 'src/app/guard/convert-date-stories';

@Component({
  selector: 'brc-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss'],
})
export class DayScheduleComponent implements OnInit {
  listDataInDay: ScheduleContent[] = [];
  @Input() isAddTodo: boolean = false;
  @Input() listDataSchedule: ScheduleContent[] = [];
  @Input() icon: Icon = {
    iconStart: '',
    iconEnd1: '',
    iconEnd2: '',
  };
  @Input() userId: number;

  @Input() day: Date = new Date();
  // View in stories test
  @Input() isStories = false;
  @Output() addTodo: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() addSchedule: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();

  constructor(public convertDate: ConvertDateStories) {}

  ngOnInit(): void {
    this.filter();
    this.sortArr(this.listDataInDay);
    let maxMinuteDueTime = this.getMinuteWithHours(
      this.listDataInDay[0]?.dueTime
    );
    for (let i = 0; i < this.listDataInDay.length - 1; i++) {
      if (
        maxMinuteDueTime >
        this.getMinuteWithHours(this.listDataInDay[i + 1].timeStart)
      ) {
        this.listDataInDay[i].isWarning = true;
        this.listDataInDay[i + 1].isWarning = true;
      }
      maxMinuteDueTime = Math.max(
        maxMinuteDueTime,
        this.getMinuteWithHours(this.listDataInDay[i + 1].dueTime)
      );
    }
  }

  getMinuteWithHours(d: Date): number {
    return d !== undefined
      ? getHours(this.convertDate._parseISO(d, this.isStories)) * 60 +
          getMinutes(this.convertDate._parseISO(d, this.isStories))
      : 0;
  }
  sortArr(arr: ScheduleContent[]) {
    return arr.sort((a, b) => {
      return (
        this.getMinuteWithHours(a.timeStart) -
          this.getMinuteWithHours(b.timeStart) ||
        this.getMinuteWithHours(a.dueTime) - this.getMinuteWithHours(b.dueTime)
      );
    });
  }
  getDetail(id: Number) {
    this.scheduleId.emit(id);
  }
  clickAddTodo(userId: number) {
    this.addTodo.emit({
      userId: userId,
      day: this.day
    });
  }

  clickAddSchedule(userId: number) {
    this.addSchedule.emit({
      userId: userId,
      day: this.day
    });
  }

  filter() {
    this.listDataSchedule?.map((x) => {
      var result = Math.abs(
        differenceInDays(
          this.convertDate._parseISO(x.timeStart, this.isStories),
          this.convertDate._parseISO(x.dueTime, this.isStories)
        )
      );
      let fakeDay = x.timeStart;
      for (let i = 0; i < result + 1; i++) {
        let timeStart = new Date(
          getYear(this.convertDate._parseISO(fakeDay, this.isStories)),
          getMonth(this.convertDate._parseISO(fakeDay, this.isStories)),
          getDate(this.convertDate._parseISO(fakeDay, this.isStories))
        );
        let timeDay = new Date(
          getYear(this.day),
          getMonth(this.day),
          getDate(this.day)
        );
        if (timeStart.toString() == timeDay.toString()) {
          this.listDataInDay.push({
            scheduleId: x.scheduleId,
            title: x.title,
            timeStart: fakeDay,
            dueTime: x.dueTime,
            typeSchedule: x.typeSchedule,
            typeRepeat: x.typeRepeat,
            users: x.users,
          });
        }
        fakeDay = addDays(
          this.convertDate._parseISO(fakeDay, this.isStories),
          1
        );
      }
      return this.listDataInDay;
    });
  }
}
