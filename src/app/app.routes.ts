import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  TodosComponent } from './todos/todos.component';

export const routes: Routes = [
    { path: '',  component: DashboardComponent },
    { path: 'home', component: DashboardComponent },
    { path: 'todos', component: TodosComponent }
  ];
