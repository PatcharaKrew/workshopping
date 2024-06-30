import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { HomepageService, Product } from '../homepage/homepage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infoproduct',
  standalone: true,
  imports: [FormsModule,CommonModule,NgZorroModule],
  templateUrl: './infoproduct.component.html',
  styleUrl: './infoproduct.component.scss'
})
export class InfoproductComponent {

  readonly HomeService = inject(HomepageService);

  product: Product | undefined;
  index!: number;
  constructor(private homeService: HomepageService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = +params['id'];
      this.product = this.HomeService.PRO[this.index];
    })
  }


}
