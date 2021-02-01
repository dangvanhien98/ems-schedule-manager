import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import {
  Icon,
  ScheduleContent,
} from '../../../../store/models/schedule_content.i';

@Component({
  selector: 'brc-new-content-schedule',
  templateUrl: './new-content-schedule.component.html',
  styleUrls: ['./new-content-schedule.component.scss'],
})
export class NewContentScheduleComponent implements OnInit {
  constructor() {}

  @Input() forDay: boolean = false;
  @Input() dataSchedule: ScheduleContent = {
    scheduleId: 0,
    title: '',
    timeStart: new Date(),
    dueTime: new Date(),
    typeSchedule: '',
    typeRepeat: '',
    users: [],
    isWarning: false,
  };
  @Input() icon: Icon = {
    iconStart: '',
    iconEnd1: '',
    iconEnd2: '',
  };
  @Input() isWarning: boolean = false;
  @Input() rowIndex: number = 0;
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();

  public isRepeat: boolean = false;
  public isShare: boolean = false;

  ngOnInit(): void {
    if (this.dataSchedule.typeRepeat != 'normal') {
      this.isRepeat = true;
    }
    if (this.dataSchedule.users?.length > 1) {
      this.isShare = true;
    }
  }
  formatTime(date: Date) {
    return moment(date).format('HH:mm');
  }
  onClick(data: Number) {
    this.scheduleId.emit(data);
  }
  getColor() {
    // TODO: lb_mui change color for group day display if need
    return this.rowIndex > 0 ? '#f4faff' : '#fdfdfd';
    // switch (this.dataSchedule.typeSchedule) {
    //   case "Meeting":
    //     return "#fdfdfd";
    //   case "Visting":
    //     return "#fdfdfd";
    //   case "Recruitment":
    //     return "#fdfdfd";
    //   default:	    }
    //     return "";
    // }
  }
  getColorOfType() {
    switch (this.dataSchedule.typeSchedule) {
      case 'Meeting':
        return '#70beef';
      case 'Visting':
        return '#e06c63';
      case 'Event':
        return '#47b15a';
      default:
        return '';
    }
  }
}
