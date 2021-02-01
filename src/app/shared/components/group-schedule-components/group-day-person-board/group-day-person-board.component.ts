import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfo } from '../../../../store/models/group-week-user.i';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';

@Component({
  selector: 'brc-group-day-person-board',
  templateUrl: './group-day-person-board.component.html',
  styleUrls: ['./group-day-person-board.component.scss'],
})
export class GroupDayPersonBoardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() isAddTodo: boolean = false;
  @Input() userInfo: UserInfo = {
    userId: 1,
    userName: '',
    fullName: '',
  };
  @Input() monthly: string;
  @Output() month: EventEmitter<object> = new EventEmitter<object>();
  @Output() phone: EventEmitter<string> = new EventEmitter<string>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() userDetail: EventEmitter<number> = new EventEmitter<number>();

  @Input() listDataSchedule: ScheduleContent[];
  @Input() startHour: number = 8;
  @Input() endHour: number = 19;
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();
  @Output() addSchedule: EventEmitter<number> = new EventEmitter<number>();
  @Output() addTodo: EventEmitter<number> = new EventEmitter<number>();

  onMonth(data) {
    this.month.emit(data);
  }
  onPhone(data) {
    this.phone.emit(data);
  }
  onBtnAddTodo(data) {
    this.btnAddTodo.emit(data);
  }
  onUserDetail(data) {
    this.userDetail.emit(data);
  }
  onScheduleId(data) {
    this.scheduleId.emit(data);
  }
  onAddSchedule(data) {
    this.addSchedule.emit(data);
  }
  onAddTodo(data) {
    this.addTodo.emit(data);
  }
}
