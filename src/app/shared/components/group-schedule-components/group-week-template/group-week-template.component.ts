import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { ListScheduleContent } from '../../../../store/models/list-schedule-content';
import { Icon} from '../../../../store/models/schedule_content.i';

@Component({
  selector: 'brc-group-week-template',
  templateUrl: './group-week-template.component.html',
  styleUrls: ['./group-week-template.component.scss']
})
export class GroupWeekTemplateComponent implements OnInit {
  //view stories test
  @Input() isStories = false;
  // header-page-group-week input
  @Input() labelHeader: LabelInterface;
  @Input() dataSelect: LabelledValue<string>[] = [];
  @Input() placeholder: string;
  @Input() buttonGroup: IButtonGroup<string>[];
  //@Input group-week-person-board
  @Input() listSchedule: ListScheduleContent[];
  @Input() icon: Icon = {
    iconStart: '',
    iconEnd1: '',
    iconEnd2: '',
  };
  @Input() dayFirstInWeek: Date;
  //@Input pagination
  @Input() groupWeekTotalRecords: number = 0;
  @Input() groupWeekRecordsPerPage: number = 0;
  @Input() groupWeekPageIndex: number = 0;
  //@output header-page-group-week
  @Output() valueButtonGroup: EventEmitter<Date> = new EventEmitter();
  @Output() getValueSelect = new EventEmitter<string>();
  @Output() dailySchedule: EventEmitter<any> = new EventEmitter<any>();
  @Output() firstDayOfWeek: EventEmitter<any> = new EventEmitter<any>();
  isSticky: boolean = false;
  //@Output group-week-person-board
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();
  @Output() monthlyOfSchedule: EventEmitter<object> = new EventEmitter<object>();;
  @Output() phoneMemoRegistration: EventEmitter<string> = new EventEmitter<string>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() userDetail: EventEmitter<number> = new EventEmitter<number>();
  @Output() addTodo: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() addSchedule: EventEmitter<Object> = new EventEmitter<Object>();
  //output pagination
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  @HostListener('window:scroll')
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }
  constructor() { }

  ngOnInit(): void {
  }
  //header-page-group-week event
  onValueButtonGroup(data) {
    this.dayFirstInWeek = data;
    this.valueButtonGroup.emit(data);
  }
  onGetValueSelect(data) {
    this.getValueSelect.emit(data);
  }
  onDailySchedule(data) {
    this.dailySchedule.emit(data);
  }
  onFirstDayOfWeek(data) {
    this.dayFirstInWeek = data;
    this.firstDayOfWeek.emit(data);
  }
  //board-group-week event 
  handleClickMonth(month) {
    this.monthlyOfSchedule.emit(month);
  }

  handleClickPhone(phone){
    this.phoneMemoRegistration.emit(phone);
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
  //Pagination event
  onPageEvent(data: number) {
    this.onPageChange.emit(data);
  }
}
