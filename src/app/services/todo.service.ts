import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json'
    })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
    todoURL = 'https://jsonplaceholder.typicode.com/todos';
    todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // get todos
  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(`${this.todoURL}${this.todosLimit}`);
  }

  // toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
      const url = `${this.todoURL}/${todo.id}`;
      return this.http.put(url, todo, httpOptions);
  }
}
