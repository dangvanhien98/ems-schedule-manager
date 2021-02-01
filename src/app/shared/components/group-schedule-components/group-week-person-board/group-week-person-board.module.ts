import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserInfoGroupWeekModule } from '../user-info-group-week/user-info-group-week.module';
import { WeekScheduleModule } from '../week-schedule/week-schedule.module';
import { GroupWeekPersonBoardComponent } from './group-week-person-board.component';

@NgModule({
  declarations: [
    GroupWeekPersonBoardComponent, 
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UserInfoGroupWeekModule,
    WeekScheduleModule,
    
  ],
  exports: [
    GroupWeekPersonBoardComponent
  ],
})
export class GroupWeekPersonBoardModule { }
