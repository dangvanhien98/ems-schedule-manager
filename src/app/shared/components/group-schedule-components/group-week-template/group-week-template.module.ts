import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupWeekPersonBoardModule } from '../group-week-person-board/group-week-person-board.module';
import { HeaderPageGroupWeekModule } from '../header-page-group-week/header-page-group-week.module';
import { HeaderScheduleModule } from '../header-schedule/header-schedule.modules';
import { HeaderWeekModule } from '../header-week/header-week.module';
import { MatPaginatorCustomModule } from '../../mat-paginator-custom/mat-paginator-custom.module';
import { GroupWeekTemplateComponent } from './group-week-template.component';

@NgModule({
  declarations: [GroupWeekTemplateComponent],
  imports: [
    CommonModule,
    HeaderWeekModule,
    HeaderScheduleModule,
    FlexLayoutModule,
    HeaderPageGroupWeekModule,
    GroupWeekPersonBoardModule,
    MatPaginatorCustomModule,
  ],
  exports: [GroupWeekTemplateComponent],
})
export class GroupWeekTemplateModule {}
