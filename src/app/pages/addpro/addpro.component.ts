import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';

@Component({
  selector: 'app-addpro',
  standalone: true,
  imports: [CommonModule,NgZorroModule],
  templateUrl: './addpro.component.html',
  styleUrl: './addpro.component.scss'
})
export class AddproComponent {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
