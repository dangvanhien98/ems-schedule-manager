import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DayInWeekComponent } from "./day-in-week.component";

@NgModule({
    declarations: [DayInWeekComponent],
    imports: [CommonModule, FormsModule],
    exports: [DayInWeekComponent]
})
export class DayInWeekModule{}
