import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsFormComponent } from './bids-form.component';

describe('BidsFormComponent', () => {
  let component: BidsFormComponent;
  let fixture: ComponentFixture<BidsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
