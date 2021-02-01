import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderScheduleModule } from '../header-schedule/header-schedule.modules';
import { HeaderWeekModule } from '../header-week/header-week.module';
import { HeaderPageGroupWeekComponent } from './header-page-group-week.component';

@NgModule({
  declarations: [HeaderPageGroupWeekComponent],
  imports: [
    CommonModule,
    HeaderWeekModule,
    HeaderScheduleModule
  ],
  exports: [
    HeaderPageGroupWeekComponent
  ],
})
export class HeaderPageGroupWeekModule {}
