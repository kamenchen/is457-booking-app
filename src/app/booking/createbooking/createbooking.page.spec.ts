import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatebookingPage } from './createbooking.page';

describe('CreatebookingPage', () => {
  let component: CreatebookingPage;
  let fixture: ComponentFixture<CreatebookingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
