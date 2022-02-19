import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaFormComponent } from './maquinaria-form.component';

describe('MaquinariaFormComponent', () => {
  let component: MaquinariaFormComponent;
  let fixture: ComponentFixture<MaquinariaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinariaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
