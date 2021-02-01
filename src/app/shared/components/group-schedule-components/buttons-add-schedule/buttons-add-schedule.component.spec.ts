import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { By } from '@angular/platform-browser';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { ButtonsAddScheduleComponent } from './buttons-add-schedule.component';
import { ButtonsAddScheduleModule } from './buttons-add-schedule.module';

describe('ButtonsAddScheduleComponent', () => {
  let component: ButtonsAddScheduleComponent;
  let fixture: ComponentFixture<ButtonsAddScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        ButtonsAddScheduleModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAddScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleClickAddScheduleDetail()', () => {
    it('should emit when clickAddTodo', () => {
      //arrange
      const expected = 16;
      component.userId = 16;
      fixture.detectChanges();
      const spy = spyOn(component.addTodo, 'emit');
      // act
      component.clickAddTodo();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handleClickAdd()', () => {
    it('should emit when clickAddSchedule', () => {
      //arrange
      const expected = 16;
      component.userId = 16;
      fixture.detectChanges();
      const spy = spyOn(component.addSchedule, 'emit');
      // act
      component.clickAddSchedule();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });


});
