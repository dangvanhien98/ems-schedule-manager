import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { ButtonsAddScheduleComponent } from './buttons-add-schedule.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [ButtonsAddScheduleComponent],
  imports: [
    CommonModule, 
    MaterialCustomModule, 
    FlexLayoutModule
  ],
  exports: [ButtonsAddScheduleComponent],
})
export class ButtonsAddScheduleModule {}
