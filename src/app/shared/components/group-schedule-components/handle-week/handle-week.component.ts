import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addDays, subDays } from "date-fns";

@Component({
  selector: 'brc-handle-week',
  templateUrl: './handle-week.component.html',
  styleUrls: ['./handle-week.component.scss']
})
export class HandleWeekComponent implements OnInit {
  @Input() dateInput: Date;
  @Output() dateOutput: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  previousWeek(){
    let dayOfWeek = this.dateInput.getDay();
    if(this.dateInput.getDay() == 0){
      this.dateInput = subDays(this.dateInput, 7);
      this.dateOutput.emit(this.dateInput);
    }else{
      this.dateInput = subDays(this.dateInput, dayOfWeek);
      this.dateOutput.emit(this.dateInput);
    }
  }

  nextWeek() {
    let dayOfWeek = this.dateInput.getDay();
    this.dateInput = addDays(this.dateInput, 7 - dayOfWeek);
    this.dateOutput.emit(this.dateInput);
  }

  todayWeek() {
    this.dateInput = new Date();
    this.dateOutput.emit(new Date());
  }

}
