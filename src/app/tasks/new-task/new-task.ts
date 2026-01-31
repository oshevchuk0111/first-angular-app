import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel():void {
    this.cancel.emit();
  }
}
