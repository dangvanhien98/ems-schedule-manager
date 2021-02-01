import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { NewContentScheduleComponent } from './new-content-schedule.component';

@NgModule({
  declarations: [NewContentScheduleComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    ScrollingModule,
    FlexLayoutModule
  ],
  exports: [
    NewContentScheduleComponent
  ],
})
export class NewContentScheduleModule { }
