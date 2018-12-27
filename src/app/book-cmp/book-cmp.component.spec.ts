import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCmpComponent } from './book-cmp.component';

describe('BookCmpComponent', () => {
  let component: BookCmpComponent;
  let fixture: ComponentFixture<BookCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
