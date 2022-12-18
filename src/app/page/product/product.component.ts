import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent{
  id: number = 0;
  name: string ='';
  product: any = {
    id:1,

  }
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(){
   this.route.params.subscribe(params=>{
     this.id = params['id'];
     this.name=params['name'];
     this.getProduct();
   })
  }
  ///call API:https://dummyjson.com/products/ + this.id
   getProduct() {
     // call api
     const url = 'https://dummyjson.com/products/category/' + this.name;
     this.http.get<any>(url).subscribe(data => {
       //set data to product
       for (let i = 0; i < data.products.length; i++){
         if (data.products[i].id == this.id){
           this.product = data.products[i];
           break;
         }
       }
       console.log(url);
       console.log(this.product);
     })
   }
}
