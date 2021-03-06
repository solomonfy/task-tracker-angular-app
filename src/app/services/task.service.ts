import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
// import { TASKS } from 'src/app/mock-tasks';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private apiURL = ' http://localhost:5000/tasks';
  private apiURL = 'http://localhost:8080/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiURL}/all`);
  }

  getTask(id: string): Observable<Task>{
    return this.http.get<Task>(`${this.apiURL}/find/${id}`)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task._id}/edit`;
    const body = { reminder: task.reminder };
    // console.log(task._id);
    return this.http.put<Task>(url, task, httpOptions);
  }

  capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
  }

  addTask(task: Task): Observable<Task> {
    task.text = this.capitalize(task.text);
    const url = `${this.apiURL}/addTask`;
    return this.http.post<Task>(url, task, httpOptions);
  }

  editTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task._id}/edit`;
    return this.http.post<Task>(url, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Object> {
    const url = `${this.apiURL}/delete/${task._id}`;
    console.log(`Task with id ${task._id} is delete`);
    return this.http.delete(url);
  }
}
