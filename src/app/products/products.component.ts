import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword : string="";
  constructor() {
  }
  ngOnInit() {
    this.products= [
      {"id":1,"name":"pc","price":4300},
      {"id":2,"name":"telephone","price":3600},
      {"id":3,"name":"chargeur","price":500},
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);
  }
  search():void {
    let result:any[]=[];
    for (let p of this.products){
      if (p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products=result;
  }
}
