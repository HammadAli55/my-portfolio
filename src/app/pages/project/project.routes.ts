import { Routes } from '@angular/router';
import { ProjectPage } from './pages/project.page';

export const routes: Routes = [
  {
    path: '',
    component: ProjectPage
  },
  {
    path: ':slug',
    loadChildren: () => import('./pages/project-detail/project-detail.module').then(m => m.ProjectDetailModule)
  },
];
