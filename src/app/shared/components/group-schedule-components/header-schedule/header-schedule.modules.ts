import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonGroupScheduleModule } from '../button-group-schedule/button-group-schedule.module';
import { LabelModule } from '../../label/label.module';
import { SelectModule } from '../../select/select.module';
import { HeaderScheduleComponent } from './header-schedule.component';

@NgModule({
  declarations: [HeaderScheduleComponent],
  imports: [
    CommonModule,
    LabelModule,
    SelectModule,
    ButtonGroupScheduleModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderScheduleComponent
  ],
})
export class HeaderScheduleModule {}
