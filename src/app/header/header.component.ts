import { Component, ViewChild } from '@angular/core';
import { DataHandlerService } from '../shared/services/DataHandler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('myForm')  productLists : any;

  constructor(private httpServe : DataHandlerService){}
  
  onSubmit(){
    // console.log(this.productLists.value);
    this.httpServe.addProductsList(this.productLists.value).subscribe((data : any)=>{
      console.log(data);
      this.httpServe.getProductsList().subscribe((res : any)=>{
        console.log(res)
      })
    })
   
  }
}
