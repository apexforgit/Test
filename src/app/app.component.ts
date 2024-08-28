import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Card } from "../card/card.component";
import { ListItem } from '../ListItem/ListItem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, Card, ListItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far);
  }

  title = 'Test';
  faCoffee = faCoffee;

  arr = ["Giriraj","Adil", "Akanksha"]

  tasks = ["Task 1 ", "Task 2", "Task 3", "Task 4"]

  deleteTask(index: number){
    this.tasks.splice(index,1)
  }
}
