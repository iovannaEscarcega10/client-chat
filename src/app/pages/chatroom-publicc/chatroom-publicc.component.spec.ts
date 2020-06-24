import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomPubliccComponent } from './chatroom-publicc.component';

describe('ChatroomPubliccComponent', () => {
  let component: ChatroomPubliccComponent;
  let fixture: ComponentFixture<ChatroomPubliccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomPubliccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomPubliccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
