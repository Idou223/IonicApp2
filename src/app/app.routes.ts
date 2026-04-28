import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
   path: 'post',
   loadComponent:()=> import('./post/post.component').then((m)=>m.PostComponent)
  },
  
];
