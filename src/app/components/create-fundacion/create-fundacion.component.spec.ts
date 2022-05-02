import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFundacionComponent } from './create-fundacion.component';

describe('CreateFundacionComponent', () => {
  let component: CreateFundacionComponent;
  let fixture: ComponentFixture<CreateFundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFundacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
