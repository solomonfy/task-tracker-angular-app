import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // to limit the add task button to be displayed only on the home page

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  title = 'Task-tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  // to use a service, needs to be added to the constructor
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTaskBtn();
    // console.log(this.showAddTask);
  }

  hasRoute(rout: string) {
    return this.router.url == rout
  }
}
