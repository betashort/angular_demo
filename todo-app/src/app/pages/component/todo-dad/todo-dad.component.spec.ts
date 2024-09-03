import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDadComponent } from './todo-dad.component';

describe('TodoDadComponent', () => {
  let component: TodoDadComponent;
  let fixture: ComponentFixture<TodoDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
