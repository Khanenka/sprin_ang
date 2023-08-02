/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Desc176Component } from './desc176.component';

describe('Desc176Component', () => {
  let component: Desc176Component;
  let fixture: ComponentFixture<Desc176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
