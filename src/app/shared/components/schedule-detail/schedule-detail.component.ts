import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { configButton } from '../../../store/models/button.i';
import { ScheduleDetail } from '../../../store/models/schedule.i';

@Component({
  selector: 'brc-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss'],
})
export class ScheduleDetailComponent implements OnInit {


  constructor(){}
  ngOnInit(): void {
    //this.scheduleDetail.startDate = this.convertDateToDayName(this.scheduleDetail.startDate) + ', ' + this.convertDateToMonthName(this.scheduleDetail.startDate);
  }
  @Input() scheduleTimeRepeat : string;
  @Input() typeCheck: boolean;
  @Input() scheduleTime: string;
  @Input() scheduleDetail: ScheduleDetail = {
    scheduleId: '',
    title: '',
    description: '',
    startDate: '',
    dueDate: '',
    timeDueRepeat: '',
    timeStartRepeat: '',
    createBy: '',
    createdByName: '',
    createByFullName: '',
    scheduleCategoryId: '',
    scheduleCategoryName: '',
    created: '',
    modified: '',
    place: '',
    important: '',
    equipmentNames: '',
    type: '',
    valueRepeat: '',
    userNames: '',
  };

  @Output() btnClickEmt: EventEmitter<void> = new EventEmitter<void>();
  @Output() editClickEmt: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteClickEmt: EventEmitter<string> = new EventEmitter<string>();
  configButtonAdd: configButton = {
    colorButton: 'primary',
    colorMouseOver: 'Basic',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'OK!',
  };
  close: boolean = false;

  fxHide: string = "";

  listButton = {
    editButton : {
      colorButton: 'primary',
      colorMouseOver: 'warn',
      colorMouseOut: 'primary',
      type: 'edit',
      text: 'Edit',
    },
    deleteButton : {
      colorButton: 'warn',
      colorMouseOver: 'primary',
      colorMouseOut: 'warn',
      type: 'delete',
      text: 'Delete',
    },
    cancelButton : {
      colorButton: 'primary',
      colorMouseOver: 'warn',
      colorMouseOut: 'primary',
      type: 'close',
      text: 'Close',
    }
  }

  clickButton() {
    this.btnClickEmt.emit();
  }
  checkInDate() {
    if (
      new Date(this.scheduleDetail.startDate).toLocaleDateString() ===
      new Date(this.scheduleDetail.dueDate).toLocaleDateString()
    ) {
      this.scheduleDetail.dueDate = formatDate(
        new Date(this.scheduleDetail.dueDate),
        'hh:mm aaa',
        'en'
      );
    }
  }

  scheduleEdit(){
    this.editClickEmt.emit();
  }

  scheduleDelete(){
    this.deleteClickEmt.emit();
  }

  scheduleClose(){
    this.close =! this.close;
  }
}
