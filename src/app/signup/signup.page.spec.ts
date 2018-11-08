import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPage } from './signup.page';
import { NavController, AlertController } from '@ionic/angular';
import { NavControllerMock, AlertControllerMock } from '../../../test-config/mocks-ionic';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPage ],
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
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
