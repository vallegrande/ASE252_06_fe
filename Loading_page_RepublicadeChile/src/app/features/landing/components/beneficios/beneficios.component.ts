import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent {
  beneficios = [
    { icono: '⏱️', titulo: 'Optimización del tiempo docente', descripcion: 'Automatiza el registro de evaluaciones y reduce la carga administrativa.' },
    { icono: '📊', titulo: 'Reportes confiables', descripcion: 'Dashboard de supervisión para directivos con datos en tiempo real.' },
    { icono: '🔔', titulo: 'Alertas tempranas', descripcion: 'Notificaciones automáticas a padres ante riesgo de bajo rendimiento.' },
    { icono: '🤝', titulo: 'Comunicación directa', descripcion: 'Canales digitales que conectan hogar y escuela para prevenir la deserción.' },
    { icono: '📚', titulo: 'Evaluación por competencias', descripcion: 'Escala CNEB: AD, A, B, C con seguimiento por periodos.' },
    { icono: '🔒', titulo: 'Información centralizada', descripcion: 'Todos los datos académicos en una sola plataforma segura.' }
  ];
}