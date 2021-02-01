import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWeekScheduleListPageComponent } from './group-week-schedule-list-page.component';

describe('GroupWeekScheduleListPageComponent', () => {
  let component: GroupWeekScheduleListPageComponent;
  let fixture: ComponentFixture<GroupWeekScheduleListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWeekScheduleListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWeekScheduleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
