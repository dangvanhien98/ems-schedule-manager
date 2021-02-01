import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupWeekTemplateModule } from '../../shared/components/group-schedule-components/group-week-template/group-week-template.module';
import { GroupWeekScheduleListPageComponent } from './group-week-schedule-list-page.component';
import { GroupWeekScheduleListPageRouter } from './group-week-schedule-list-page-routing.module';

@NgModule({
  declarations: [GroupWeekScheduleListPageComponent],
  imports: [
    CommonModule,
    GroupWeekTemplateModule,
    GroupWeekScheduleListPageRouter,
  ],
  exports: [GroupWeekScheduleListPageComponent],
})
export class GroupWeekScheduleListPageModule {}
