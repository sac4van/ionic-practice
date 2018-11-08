import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomPage } from './add-room.page';
import { NavController } from '@ionic/angular';
import { NavControllerMock } from '../../../test-config/mocks-ionic';

describe('AddRoomPage', () => {
  let component: AddRoomPage;
  let fixture: ComponentFixture<AddRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomPage ],
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
    fixture = TestBed.createComponent(AddRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
