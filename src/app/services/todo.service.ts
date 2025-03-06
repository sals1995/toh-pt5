import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
  private todos=[
    {id:1,name:"eating breakfast",priority: 100},
    {id:2,name:"eating lunch",priority: 200},
    {id:3,name:"eating dinner",priority: 10},
    {id:4,name:"make PWA",priority: 150},
  ]
  constructor() { }

  /** GET heroes from the server */
  getTodos (): Observable<Todo[]> {
    return of(this.todos)
  }


  /** GET Todo by id. Will 404 if id not found */
  getTodo(id: number): Observable<Todo> {
    return of(this.todos[0])
  }
}
