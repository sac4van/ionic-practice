import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPage } from './room.page';
import { NavController } from '@ionic/angular';
import { NavControllerMock } from '../../../test-config/mocks-ionic';

describe('RoomPage', () => {
  let component: RoomPage;
  let fixture: ComponentFixture<RoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NavController,
          useClass: NavControllerMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
