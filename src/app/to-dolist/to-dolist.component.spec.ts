import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDolistComponent } from './to-dolist.component';

describe('ToDolistComponent', () => {
  let component: ToDolistComponent;
  let fixture: ComponentFixture<ToDolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
