import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { ButtonGroupScheduleComponent } from './button-group-schedule.component';

@NgModule({
  declarations: [ButtonGroupScheduleComponent],
  imports: [
    CommonModule, 
    MaterialCustomModule
  ],
  exports: [
    ButtonGroupScheduleComponent
  ],
})
export class ButtonGroupScheduleModule {}
