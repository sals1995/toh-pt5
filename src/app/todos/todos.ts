import { Component, OnInit } from '@angular/core';

import {Todo } from '../todo/todo';
import { TodoService } from '../services/todo.service';
import { TodoModel } from '../todo';

@Component({
  selector: 'app-todos',
  imports:[Todo],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class Todos implements OnInit {
  todos:TodoModel[];

  constructor(private todoService: TodoService) { 
     this.todos=[]
  }

  ngOnInit() {
    this.getTodos()    
  }
  
  getTodos() : void {
    this.todoService.getTodos()
    .subscribe(todos =>  this.todos = todos);
  }


}
