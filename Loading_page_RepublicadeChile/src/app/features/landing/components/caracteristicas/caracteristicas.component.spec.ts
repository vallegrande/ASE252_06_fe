import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CaracteristicasComponent } from './caracteristicas.component';

describe('CaracteristicasComponent', () => {
  let component: CaracteristicasComponent;
  let fixture: ComponentFixture<CaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasComponent],
      providers: [
        provideRouter([]) // Provee soporte de rutas en caso de que el componente use routerLink
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});