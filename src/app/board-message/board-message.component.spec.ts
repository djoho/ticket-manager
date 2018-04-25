import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMessageComponent } from './board-message.component';

describe('BoardMessageComponent', () => {
  let component: BoardMessageComponent;
  let fixture: ComponentFixture<BoardMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
