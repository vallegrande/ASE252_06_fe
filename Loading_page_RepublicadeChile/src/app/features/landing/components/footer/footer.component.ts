import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
  email = 'contacto@republicadechile.edu.pe';
  telefono = '(01) 234-5678';
  institucion = 'I.E. N.° 20190 "República de Chile"';
  ubicacion = 'San Vicente de Cañete — Portal Académico Web';
}