import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Icon, ScheduleContent } from '../../../../store/models/schedule_content.i';
import {
  getHours,
  getMinutes,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

@Component({
  selector: 'brc-daily-board',
  templateUrl: './daily-board.component.html',
  styleUrls: ['./daily-board.component.scss'],
})
export class DailyBoardComponent implements OnInit, OnChanges {
  @Input() isAddTodo: boolean = false;
  @Input() listDataSchedule: ScheduleContent[];
  @Input() startHour: number = 8;
  @Input() endHour: number = 19;
  @Input() userId: number;
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();
  @Output() addSchedule: EventEmitter<number> = new EventEmitter<number>();
  @Output() addTodo: EventEmitter<number> = new EventEmitter<number>();

  listDataDailySchedule: ScheduleContent[][];
  icon: Icon = {
    iconStart: 'warning',
    iconEnd1: 'repeat',
    iconEnd2: 'folder_shared',
  };

  constructor() {}

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.sortArr(this.listDataSchedule);
    this.checkWarning(this.listDataSchedule);
    this.convertDataSchedule(this.listDataSchedule);
  }

  convertDataSchedule(list: ScheduleContent[]) {
    let tempList: ScheduleContent[];
    this.listDataDailySchedule = [];
    let row = 0;
    while (list.length > 1) {
      tempList = [];
      this.listDataDailySchedule[row] = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].isWarning != true) {
          this.addFreeTime(this.listDataDailySchedule[row], list[i]);
        } else if (
          this.listDataDailySchedule[row].length > 0 &&
          list[i].timeStart <
            this.listDataDailySchedule[row][this.listDataDailySchedule[row].length - 1].dueTime
        ) {
          tempList.push(list[i]);
        } else {
          this.addFreeTime(this.listDataDailySchedule[row], list[i]);
        }
      }
      this.addLastFreeTime(this.listDataDailySchedule[row]);
      row++;
      list = tempList;
    }
    if (list.length > 0) {
      this.listDataDailySchedule[row] = [];
      this.addFreeTime(this.listDataDailySchedule[row], list[0]);
      this.addLastFreeTime(this.listDataDailySchedule[row]);
    }
  }

  getMinuteWithHours(d: Date) : number {
    return d!==undefined ? d.getHours() * 60 + d.getMinutes() : 0;
  }

  sortArr(arr: ScheduleContent[]) {
    return arr.sort((a, b) => {
      return (
        this.getMinuteWithHours(a.timeStart) - this.getMinuteWithHours(b.timeStart) || 
        this.getMinuteWithHours(a.dueTime) - this.getMinuteWithHours(b.dueTime)
      );
    });
  }

  checkWarning(list: ScheduleContent[]) {
    let maxMinuteDueTime = this.getMinuteWithHours(list[0]?.dueTime);
    for (let i = 0; i < list.length - 1; i++) {
      if(maxMinuteDueTime > this.getMinuteWithHours(list[i + 1].timeStart)){
        list[i].isWarning = true;
        list[i + 1].isWarning = true;
      }
      maxMinuteDueTime = Math.max(maxMinuteDueTime, this.getMinuteWithHours(list[i + 1].dueTime));
    }
  }

  addFreeTime(listSchedule: ScheduleContent[], schedule: ScheduleContent) {
    if (listSchedule.length > 0) {
      if (listSchedule[listSchedule.length - 1].dueTime < schedule.timeStart) {
        let newSchedule: ScheduleContent = {
          scheduleId: 1,
          dueTime: schedule.timeStart,
          timeStart: listSchedule[listSchedule.length - 1].dueTime,
          title: '',
          isWarning: true,
          typeRepeat: '',
          typeSchedule: '',
          users: [],
        };
        listSchedule.push(newSchedule);
      }
    } else {
      if (getHours(schedule.timeStart) > this.startHour) {
        let startTime = new Date(schedule.timeStart.toString());
        startTime.setHours(this.startHour);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        let newSchedule: ScheduleContent = {
          scheduleId: 1,
          dueTime: schedule.timeStart,
          timeStart: startTime,
          title: '',
          isWarning: true,
          typeRepeat: '',
          typeSchedule: '',
          users: [],
        };
        listSchedule.push(newSchedule);
      }
    }
    listSchedule.push(schedule);
  }

  addLastFreeTime(listSchedule: ScheduleContent[]) {
    if (
      getHours(listSchedule[listSchedule.length - 1].dueTime) < this.endHour
    ) {
      let endTime = new Date(
        listSchedule[listSchedule.length - 1].dueTime.toString()
      );
      endTime.setHours(this.endHour);
      endTime.setMinutes(0);
      endTime.setSeconds(0);
      let newSchedule: ScheduleContent = {
        scheduleId: 1,
        dueTime: endTime,
        timeStart: listSchedule[listSchedule.length - 1].dueTime,
        title: '',
        isWarning: true,
        typeRepeat: '',
        typeSchedule: '',
        users: [],
      };
      listSchedule.push(newSchedule);
    }
  }

  getPercent(schedule: ScheduleContent) {
    let blockNum: number = 0;
    if (differenceInHours(schedule.dueTime, schedule.timeStart) > 0) {
      blockNum =
        differenceInHours(schedule.dueTime, schedule.timeStart) * 4 -
        getMinutes(schedule.timeStart) / 15 +
        getMinutes(schedule.dueTime) / 15;
    } else {
      blockNum = differenceInMinutes(schedule.dueTime, schedule.timeStart) / 15;
    }

    return (100 / ((this.endHour - this.startHour) * 4)) * blockNum;
  }

  getScheduleId(scheduleId){
    this.scheduleId.emit(scheduleId);
  }

  clickAddSchedule(userId){
    this.addSchedule.emit(userId);
  }

  clickAddTodo(userId){
    this.addTodo.emit(userId);
  }
}
