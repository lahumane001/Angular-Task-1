import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class DataHandlerService{

    baseUrl = 'https://productlist-task-default-rtdb.firebaseio.com/product.json';

    updLists : BehaviorSubject<any> = new BehaviorSubject('a')
    constructor(private http : HttpClient){}
    
    addProductsList(res : any){
        return this.http.post(this.baseUrl, res)
    }
    getProductsList(){
        return this.http.get(this.baseUrl, {
            headers : new HttpHeaders({
                'name' : 'Lahu'
            }),
            observe : 'body'
        }).pipe(map((jsonData : any) =>{
            let arr = [];
            for(let data in jsonData ){
                arr.push({...jsonData[data], id : data})
            }
            this.updLists.next(arr)
            return arr;
        }))
    }
}