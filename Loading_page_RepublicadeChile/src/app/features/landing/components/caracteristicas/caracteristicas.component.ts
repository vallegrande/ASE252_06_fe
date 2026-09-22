import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracteristicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {
  caracteristicas = [
    { titulo: 'Registro de evaluaciones por periodos', descripcion: 'Sistema automatizado alineado al calendario académico.' },
    { titulo: 'Matriz transaccional de notas', descripcion: 'Herramienta especializada para docentes por competencias CNEB.' },
    { titulo: 'Dashboard de supervisión', descripcion: 'Panel principal para directivos y especialistas.' },
    { titulo: 'Alertas tempranas', descripcion: 'Notificaciones automáticas ante riesgo de bajo rendimiento.' },
    { titulo: 'Acceso multiportal', descripcion: 'Interfaces diferenciadas para docentes, padres y estudiantes.' },
    { titulo: 'Reportes descargables', descripcion: 'Información consolidada para la toma de decisiones pedagógicas.' }
  ];
}
