import { Component } from '@angular/core';
import { DataHandlerService } from '../shared/services/DataHandler.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent {

  getProductList : any[] = [];
  qtyArr :any[]=[];
  tableProductsArr :any[] =[];
  tTotalAmt = 0;
  constructor(private http : DataHandlerService){
  }

  ngOnInit(): void {
    this.getLists();
  }
  getLists(){
    this.http.getProductsList().subscribe((res : any)=>{
      this.getProductList = res;
      console.log(this.getProductList);
      this.qtyArr = Array(this.getProductList.length).fill(1)
    })
    this.http.updLists.subscribe((res:any)=>{
      if(res != 'a'){
        this.getProductList = res
        this.qtyArr = Array(this.getProductList.length).fill(1)
      }
    })
   
  }
  decrement(i:any){
    if(this.qtyArr[i] > 1){
      this.qtyArr[i]--;
    }
  }
  increment(i:any){
    this.qtyArr[i]++
  }
  addToTable(list:any, total:number, tTotal:number){
    console.log(list);
    this.tableProductsArr.push({...list, total, tTotal})
    console.log(this.tableProductsArr);
    this.tTotalAmt= this.tTotalAmt + tTotal  
   }
}
