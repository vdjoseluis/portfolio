import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component')
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component')
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];
