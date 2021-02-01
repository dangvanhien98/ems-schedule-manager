import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsAddScheduleModule } from '../buttons-add-schedule/buttons-add-schedule.module';
import { NewContentScheduleModule } from '../new-content-schedule/new-content-schedule.module';
import { DailyBoardComponent } from './daily-board.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [DailyBoardComponent],
  imports: [
    CommonModule,
    ButtonsAddScheduleModule,
    NewContentScheduleModule,
    FlexLayoutModule
  ],
  exports: [DailyBoardComponent]
})
export class DailyBoardModule { }
