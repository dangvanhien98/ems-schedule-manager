import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsAddScheduleModule } from '../buttons-add-schedule/buttons-add-schedule.module';
import { NewContentScheduleModule } from '../new-content-schedule/new-content-schedule.module';
import { DayScheduleComponent } from './day-schedule.component';

@NgModule({
  declarations: [
    DayScheduleComponent,
  ],
  imports: [
    CommonModule,
    NewContentScheduleModule,
    ButtonsAddScheduleModule,
  ],
  exports: [
    DayScheduleComponent
  ],
})
export class DayScheduleModule { }
