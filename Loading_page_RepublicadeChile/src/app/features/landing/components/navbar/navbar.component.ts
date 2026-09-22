import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Contacto', href: '#contacto' }
  ];
}
