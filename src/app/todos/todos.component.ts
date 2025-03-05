import { Component, OnInit } from '@angular/core';

import {Todo } from '../todo';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports:[TodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService: TodoService) { 
     this.todos=[]
  }

  ngOnInit() {
    this.getTodos()    
  }
  
  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todos =>  this.todos = todos);
  }


}
