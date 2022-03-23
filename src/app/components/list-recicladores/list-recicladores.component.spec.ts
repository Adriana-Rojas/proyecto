import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecicladoresComponent } from './list-recicladores.component';

describe('ListRecicladoresComponent', () => {
  let component: ListRecicladoresComponent;
  let fixture: ComponentFixture<ListRecicladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecicladoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecicladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
