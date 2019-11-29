import { Injectable, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const TODOS = [
  { title: "Install Angulat CLI", isDone: true },
  { title: "Style app", isDone: true },
  { title: "Finish service functionality", isDone: false },
  { title: "Setup API", isDone: false }
];

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}
  get() {
    return new Promise(resolve => resolve(TODOS));
  }
  put(changed) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    });
  }
  add(data) {
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
    });
  }
}
