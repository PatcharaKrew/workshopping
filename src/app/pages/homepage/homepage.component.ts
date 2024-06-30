import { HomepageService,  Product } from './homepage.service';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgZorroModule,CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {

  private router = inject(Router);
  readonly HomeService = inject(HomepageService);

  ProductId: number = 0;
  ProductName: string = '';
  ProductData:string = '';
  ProductStock:number = 0;
  ProductPrice:number = 0;
  ProductImg:string = '';



  ngOnInit(): void {
    this.HomeService.onGetProduct();
    console.log(this.ProductName);
  }

  onAdd(){
  //  products.push({
  //     name : this.ProductName,
  //     data : this.ProductData,
  //     stock : this.ProductStock,
  //     price : this.ProductPrice,
  //   })

    this.HomeService.onAddProduct(this.ProductName, this.ProductData,this.ProductStock,this.ProductPrice,this.ProductImg,this.ProductId);
    console.log(this.HomeService.PRO);
  }
  isVisible = false;
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  showModal(): void {
    this.isVisible = true;
  }
  //new


 }


