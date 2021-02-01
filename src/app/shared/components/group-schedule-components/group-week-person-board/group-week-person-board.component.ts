import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfo } from '../../../../store/models/group-week-user.i';
import { Icon, ScheduleContent } from '../../../../store/models/schedule_content.i';

@Component({
  selector: 'brc-group-week-person-board',
  templateUrl: './group-week-person-board.component.html',
  styleUrls: ['./group-week-person-board.component.scss']
})
export class GroupWeekPersonBoardComponent implements OnInit {
  //view stories test
  @Input() isStories = false;

  @Input() isAddTodo: boolean = false;
  @Input() listDataSchedule: ScheduleContent[] = [];
  @Input() icon: Icon = {
    iconStart: '',
    iconEnd1: '',
    iconEnd2: '',
  };
  @Input() dayFirstInWeek: Date;
  @Input() userInfo: UserInfo = {
    userId: 1,
    userName: '',
    fullName: '',
  };

  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();
  @Output() monthlyOfSchedule: EventEmitter<object> = new EventEmitter<object>();;
  @Output() phoneMemoRegistration: EventEmitter<string> = new EventEmitter<string>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() userDetail: EventEmitter<number> = new EventEmitter<number>();
  @Output() addTodo: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() addSchedule: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMonth(month: object) {
    this.monthlyOfSchedule.emit(month);
  }

  handleClickPhone(data){
    this.phoneMemoRegistration.emit(data);
  }
  
  handleClickUserDetail(scheduleId: number) {
    this.userDetail.emit(scheduleId);
  }

  handleClickBtnAddTodo(data) {
    this.btnAddTodo.emit(data);
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
}
