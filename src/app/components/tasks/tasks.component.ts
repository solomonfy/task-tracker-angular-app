import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';
// import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  tasksWithReminder: any[] = [];

  constructor(private taskService: TaskService) {}

  // need to get all tasks when page loads
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    // console.log(task)
    alert('Are you sure?');
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((value) => value._id !== task._id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    //  console.log(task)
  }

  addTask(task: Task) {
    // console.log(task)
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  editTask(task: Task) {
    // console.log(task)
    this.taskService.editTask(task).subscribe((task) => this.tasks.push(task));
  }

  countTasksWithReminder(tasks: Task[]) {
    this.tasksWithReminder = this.tasks.filter((task) => task.reminder);
    return this.tasksWithReminder;
  }
}
