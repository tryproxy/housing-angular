import { Routes } from "@angular/router";
import { Home } from "./home/home";

export const routerConfig: Routes = [
  {
    path: '',
    loadComponent: async () => import('./home/home').then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'details/:id',
    loadComponent: async () => import('./details/details.component').then(m => m.DetailsComponent),
    title: 'House Details',

  },

]
