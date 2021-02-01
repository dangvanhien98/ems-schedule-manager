import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DayInWeekModule } from '../day-in-week/day-in-week.module';
import { HandleWeekModule } from '../handle-week/handle-week.module';

import { HeaderWeekComponent } from './header-week.component';

describe('HeaderWeekComponent', () => {
  let component: HeaderWeekComponent;
  let fixture: ComponentFixture<HeaderWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWeekComponent ],
      imports: [
        HandleWeekModule,
        DayInWeekModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("handleWeek", () => {
    it("createListDate function should called with date", () => {
      const spy = spyOn(component, "createListDate");
      const spyEmit = spyOn(component.firstDayOfWeek, "emit");
      const expected = new Date();
      component.handleWeek(expected);
      expect(spyEmit).toHaveBeenCalledWith(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe("scheduleOfDate", () => {
    it("dailySchedule should emit date", () => {
      const spy = spyOn(component.dailySchedule, "emit");
      const expected = new Date();
      component.scheduleOfDate(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })
});
