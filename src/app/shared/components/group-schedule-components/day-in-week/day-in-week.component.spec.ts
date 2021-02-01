import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInWeekComponent } from './day-in-week.component';
import { By } from "@angular/platform-browser";

describe('DayInWeekComponent', () => {
  let component: DayInWeekComponent;
  let fixture: ComponentFixture<DayInWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayInWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInWeekComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it("color is orange", () => {
      component.date = new Date("1/2/2021");
      component.ngOnInit();
      expect(component.color).toEqual("orange");
    })

    it("color is red", () => {
      component.date = new Date("1/3/2021");
      component.ngOnInit();
      expect(component.color).toEqual("red");
    })
  })

  describe("dailySchedule", () => {
    it("should emit date", () => {
      const spy = spyOn(component.dailySchedule, "emit");
      const expected = new Date();
      component.date = expected;
      component.dailySchedules();
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe("Init", () => {
    it("should render data date to html", () => {
      component.date = new Date();
      fixture.detectChanges();
      const bElement = fixture.debugElement.query(By.css('b')).nativeElement;
      expect(bElement.textContent.trim()).toEqual(component.day + ' (' + component.txtDay + ')');
    })
  })
});
