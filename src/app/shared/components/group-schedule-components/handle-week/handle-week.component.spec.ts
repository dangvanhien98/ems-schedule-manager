import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleWeekComponent } from './handle-week.component';

describe('HandleWeekComponent', () => {
  let component: HandleWeekComponent;
  let fixture: ComponentFixture<HandleWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("previousWeek", () => {
    it("should return first date of previous week", () => {
      const spy = spyOn(component.dateOutput, 'emit');
      component.dateInput = new Date("1/3/2021");
      component.previousWeek();
      expect(spy).toHaveBeenCalled;
    })

    it("should return first date of persent week", () => {
      const spy = spyOn(component.dateOutput, 'emit');
      component.dateInput = new Date();
      component.previousWeek();
      expect(spy).toHaveBeenCalled;
    })
  })

  describe("nextWeek", () => {
    it("should return first day of next week", () => {
      const spy = spyOn(component.dateOutput, 'emit');
      component.dateInput = new Date();
      component.nextWeek();
      expect(spy).toHaveBeenCalled();
    })
  })

  describe("todayWeek", () => {
    it("should return today", () => {
      const spy = spyOn(component.dateOutput, 'emit');
      component.dateInput = new Date();
      component.todayWeek();
      expect(spy).toHaveBeenCalledWith(new Date());
    })
  })
});
