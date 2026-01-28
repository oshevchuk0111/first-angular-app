import { Component, Input, Output, EventEmitter } from '@angular/core';

// type User = {
//   id: string;
//     avatar: string;
//     name: string;
// }

interface User {
  id: string;
      avatar: string;
      name: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
