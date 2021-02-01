import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderScheduleModule } from '../header-schedule/header-schedule.modules';
import { HourlyTimeModule } from '../hourly-time/hourly-time.module';
import { HeaderPageGroupDayComponent } from './header-page-group-day.component';

@NgModule({
  declarations: [HeaderPageGroupDayComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HeaderScheduleModule,
    HourlyTimeModule,
  ],
  exports: [HeaderPageGroupDayComponent],
})
export class HeaderPageGroupDayModule {}
