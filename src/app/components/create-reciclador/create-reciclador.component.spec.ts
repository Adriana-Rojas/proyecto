import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecicladorComponent } from './create-reciclador.component';

describe('CreateRecicladorComponent', () => {
  let component: CreateRecicladorComponent;
  let fixture: ComponentFixture<CreateRecicladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecicladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecicladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
