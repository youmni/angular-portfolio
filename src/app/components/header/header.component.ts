import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a routerLink="/" class="text-xl font-bold text-indigo-600">Youmni Malha</a>
        <div class="hidden md:flex space-x-8">
          <a routerLink="#about" class="text-gray-600 hover:text-indigo-600">About</a>
          <a routerLink="#skills" class="text-gray-600 hover:text-indigo-600">Skills</a>
          <a routerLink="#projects" class="text-gray-600 hover:text-indigo-600">Projects</a>
          <a routerLink="#contact" class="text-gray-600 hover:text-indigo-600">Contact</a>
        </div>
        <button class="md:hidden" (click)="toggleMenu()">☰</button>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}