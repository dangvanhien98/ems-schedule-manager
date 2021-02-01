import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { UserInfo } from '../../../../store/models/group-week-user.i';

@Component({
  selector: 'brc-user-info-group-week',
  templateUrl: './user-info-group-week.component.html',
  styleUrls: ['./user-info-group-week.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class UserInfoGroupWeekComponent implements OnInit {
  @Input() userInfo: UserInfo = {
    userId: 1,
    userName: '',
    fullName: '',
  };
  @Input() monthly: Date;
  @Output() month: EventEmitter<object> = new EventEmitter<object>();;
  @Output() phone: EventEmitter<string> = new EventEmitter<string>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() userDetail: EventEmitter<number> = new EventEmitter<number>();
  public showUpConfirmation: boolean = false;
  public sign = "down";
  @ViewChild('confirmationShow') confirmationShow: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  clickConfirmation() {
    this.showUpConfirmation = !this.showUpConfirmation;
    if(this.sign == "down") {
      this.sign = "up";
    }else{
      this.sign = "down";
    }
  }

  onClick(event) {
    if (!this.confirmationShow.nativeElement.contains(event.target)) {
      if (this.showUpConfirmation) {
        this.showUpConfirmation = !this.showUpConfirmation;
        this.sign = "down";
      }
    }
  }

  handleClickMonth() {
    this.month.emit({monthly: this.monthly, userId: this.userInfo.userId});
  }

  handleClickPhone() {
    this.phone.emit();
  }

  handleClickBtnAddTodo() {
    this.btnAddTodo.emit();
  }

  handleClickUserDetail(data: number) {
    this.userDetail.emit(data);
  }
}
