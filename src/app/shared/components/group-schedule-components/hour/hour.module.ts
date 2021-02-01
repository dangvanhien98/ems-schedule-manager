import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { HourComponent } from './hour.component';


@NgModule({
  declarations: [HourComponent],
  imports: [
    CommonModule, 
    MaterialCustomModule, 
    FlexLayoutModule
],
  exports: [HourComponent],
})
export class HourModule {}
