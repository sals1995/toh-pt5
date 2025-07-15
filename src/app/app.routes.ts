import { Routes } from '@angular/router';
import { Dashboard} from './dashboard/dashboard';
import {  Todos} from './todos/todos';

export const routes: Routes = [
    { path: '',  component: Dashboard},
    { path: 'home', component: Dashboard},
    { path: 'todos', component: Todos}
  ];
