import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'brc-buttons-add-schedule',
  templateUrl: './buttons-add-schedule.component.html',
  styleUrls: ['./buttons-add-schedule.component.scss'],
})
export class ButtonsAddScheduleComponent implements OnInit {
  @Input() isAddTodo: boolean = false;
  @Input() userId: number;
  @Output() addTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() addSchedule: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clickAddTodo() {
    this.addTodo.emit(this.userId);
  }

  clickAddSchedule() {
    this.addSchedule.emit(this.userId);
  }

}
