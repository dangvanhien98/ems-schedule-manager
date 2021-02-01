import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { ScheduleContent } from '../../../../store/models/schedule_content.i'

import { NewContentScheduleComponent } from './new-content-schedule.component';
import { By } from '@angular/platform-browser';

describe('NewContentScheduleComponent', () => {
  let component: NewContentScheduleComponent;
  let fixture: ComponentFixture<NewContentScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewContentScheduleComponent],
      imports: [CommonModule,
        MaterialCustomModule,
        ScrollingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  let dataSchedule: ScheduleContent = {
    scheduleId: 1,
    title: "Correspondence such as e-mail, review of proposal materials at each site",
    timeStart: new Date('09/11/2020 08:00'),
    dueTime: new Date('09/11/2020 11:00'),
    typeSchedule: "Meeting",
    typeRepeat: "normal",
    users: [
      {
        categoryName: 'Nguyễn Văn A',
        categoryId: 1,
      },
      {
        categoryName: 'Dương Văn B',
        categoryId: 2,
      },
    ]
  };
  let dataSchedule1: ScheduleContent = {
    scheduleId: 1,
    title: "Correspondence such as e-mail, review of proposal materials at each site",
    timeStart: new Date('09/11/2020 08:00'),
    dueTime: new Date('09/11/2020 11:00'),
    typeSchedule: "Visting",
  };
  let dataSchedule2: ScheduleContent = {
    scheduleId: 1,
    title: "Correspondence such as e-mail, review of proposal materials at each site",
    timeStart: new Date('09/11/2020 08:00'),
    dueTime: new Date('09/11/2020 11:00'),
    typeSchedule: "Recruitment",
  };
  describe("onChange", () => {
    it("Should emit data", () => {
      const data = dataSchedule;
      const spy = spyOn(component.scheduleId, "emit");
      component.onClick(data.scheduleId);
      expect(spy).toHaveBeenCalledWith(data.scheduleId);
    });
  });
  describe("Init", () => {
    it("should render dataSchedule value", () => {
      component.dataSchedule = dataSchedule;
      fixture.detectChanges();
      const valueSpan1 = fixture.debugElement.query(By.css('#category')).nativeElement;
      const valueA = fixture.debugElement.query(By.css('a')).nativeElement;
      const valueSpan = fixture.debugElement.query(By.css('span')).nativeElement;
      expect(valueSpan1.textContent.trim()).toEqual(component.dataSchedule.typeSchedule);
      expect(valueA.textContent.trim()).toEqual(component.dataSchedule.title);
      expect(valueSpan.textContent.trim()).toEqual("08:00 - 11:00");
    });
    it("typeSchedule is Visting", () => {
      component.dataSchedule = dataSchedule1;
      fixture.detectChanges();
      const valueSpan1 = fixture.debugElement.query(By.css('#category')).nativeElement;
      expect(valueSpan1.textContent.trim()).toEqual(component.dataSchedule.typeSchedule);
    })
    it("typeSchedule is Recruitment", () => {
      component.dataSchedule = dataSchedule2;
      fixture.detectChanges();
      const valueSpan1 = fixture.debugElement.query(By.css('#category')).nativeElement;
      expect(valueSpan1.textContent.trim()).toEqual(component.dataSchedule.typeSchedule);
    })
  });
  describe("ngOninit", () => {
    it("typeRepeat is normal and length of users > 1", () => {
      component.dataSchedule = dataSchedule;
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.isRepeat).toEqual(true);
      expect(component.isShare).toEqual(true);
    })
  })
});
