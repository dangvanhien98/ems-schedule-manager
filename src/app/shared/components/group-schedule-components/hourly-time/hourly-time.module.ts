import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { HourModule } from '../hour/hour.module';
import { HourlyTimeComponent } from './hourly-time.component';

@NgModule({
  declarations: [HourlyTimeComponent],
  imports: [
    CommonModule, 
    MaterialCustomModule, 
    FlexLayoutModule,
    HourModule
],
  exports: [HourlyTimeComponent],
})
export class HourlyTimeModule {}
