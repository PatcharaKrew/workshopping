import { Component, OnInit, inject } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NgZorroModule],
})
export class WelcomeComponent implements OnInit {

  private router = inject(Router);

  ngOnInit() {}
  onClick(): void{
    this.router.navigate(['homepage']);
  }
}
