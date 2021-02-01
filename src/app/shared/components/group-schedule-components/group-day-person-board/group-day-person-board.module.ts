import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DailyBoardModule } from '../daily-board/daily-board.module';
import { UserInfoGroupWeekModule } from '../user-info-group-week/user-info-group-week.module';
import { GroupDayPersonBoardComponent } from './group-day-person-board.component';

@NgModule({
  declarations: [GroupDayPersonBoardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UserInfoGroupWeekModule,
    DailyBoardModule,
  ],
  exports: [GroupDayPersonBoardComponent],
})
export class GroupDayPersonBoardModule {}
