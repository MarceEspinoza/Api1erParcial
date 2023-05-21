import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCoctelesComponent } from './listado-cocteles.component';

describe('ListadoCoctelesComponent', () => {
  let component: ListadoCoctelesComponent;
  let fixture: ComponentFixture<ListadoCoctelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCoctelesComponent]
    });
    fixture = TestBed.createComponent(ListadoCoctelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
