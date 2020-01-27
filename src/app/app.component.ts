import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory';
  item1 : string = "";
  item2 : string = "";
  price1 : string = "";
  price2 : string = "";
  total : number;
  amount : number;
  tax : number = 0;
  temp : boolean = false;
  temp1 : boolean = false;
  temp2 : boolean = true;

  generateInvoice(){
    this.temp = true;
    if(this.item1 === "" || this.item2 === "" || this.price1 === "" || this.price2 === "" ){
      this.temp2 = false;
    }
    else{
      this.temp2 = true;
      this.total = parseInt(this.price1) + parseInt(this.price2);
      this.tax = this.total * 0.20;
      this.amount = this.total + this.tax;
    }
  }

  checkout(){
    this.temp1 = true;
  }
}
