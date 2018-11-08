import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPage } from './chat.page';
import { NavController } from '@ionic/angular';
import { NavControllerMock, ActivatedRouteMock } from '../../../test-config/mocks-ionic';
import { ActivatedRoute } from '@angular/router';

describe('ChatPage', () => {
  let component: ChatPage;
  let fixture: ComponentFixture<ChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NavController,
          useClass: NavControllerMock
        },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
