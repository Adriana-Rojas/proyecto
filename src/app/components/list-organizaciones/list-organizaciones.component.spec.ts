import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganizacionesComponent } from './list-organizaciones.component';

describe('ListOrganizacionesComponent', () => {
  let component: ListOrganizacionesComponent;
  let fixture: ComponentFixture<ListOrganizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrganizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrganizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
