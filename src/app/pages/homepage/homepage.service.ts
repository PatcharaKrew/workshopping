import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface Product {

  id : number;
  name: string;
  data: string;
  stock: number;
  price: number;
  img: string;
}


@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private router = inject(Router);
  PRO: Product[] = JSON.parse(
    localStorage.getItem('products') ?? '[]'
  );

  //new
  //new

  onGetProduct() {
    this.PRO = JSON.parse(
      localStorage.getItem('products') ?? '[]'
    );
  }
  onAddProduct(productName: string,productData: string,productStock: number, productPrice: number,productImg: string,productId : number) {
    this.PRO.push({name: productName, data: productData, stock: productStock, price: productPrice, img: productImg, id: productId});
    localStorage.setItem(
      'products',
      JSON.stringify([...this.PRO])
    );
    this.onGetProduct();
  }
  onDelete(index: number) {
    console.log(index);

    this.PRO.splice(index, 1);

    localStorage.setItem('products', JSON.stringify(this.PRO));
  }

  onInfo(id: number){
    this.router.navigate(['infoproduct',id]);
    return this.PRO.find(product => product.id === id)
 }

  //new//
  //new//

}
