import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalSaved: number;
  price: number;
  description: string;

  constructor(public navCtrl: NavController) {

      this.totalSaved= 0;
  }
  public addItem(){
      this.totalSaved += this.price;
      this.description =  "";
      this.price = null;
  }
}
