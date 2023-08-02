/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaccountsnumberComponent } from './saccountsnumber.component';

describe('SaccountsnumberComponent', () => {
  let component: SaccountsnumberComponent;
  let fixture: ComponentFixture<SaccountsnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaccountsnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaccountsnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
