import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPage } from './signin.page';
import { NavController, AlertController } from '@ionic/angular';
import { NavControllerMock, AlertControllerMock } from '../../../test-config/mocks-ionic';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NavController,
          useClass: NavControllerMock
        },
        {
          provide: AlertController,
          useClass: AlertControllerMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
