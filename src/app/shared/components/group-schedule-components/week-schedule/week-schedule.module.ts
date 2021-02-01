import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { DayScheduleModule } from '../day-schedule/day-schedule.module';
import { WeekScheduleComponent } from './week-schedule.component';

@NgModule({
  declarations: [WeekScheduleComponent],
  imports: [CommonModule, MaterialCustomModule, FlexLayoutModule, DayScheduleModule],
  exports: [WeekScheduleComponent],
})
export class WeekScheduleModule {}
