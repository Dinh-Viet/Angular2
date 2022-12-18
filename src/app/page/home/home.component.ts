import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  className: string = 'T2210M';
  numberOfStudents: number = 2;
  textColor = 'text-primary'
  categories: string[] = [
    'Fashion', 'Whatch', 'Shoes', 'Diamond'
  ];
  product: any = {
    name: 'Viet dep zai',
    price: 999999
  };

  products: any = [
    {
      id:1,
    name: 'Viet dep zai',
    price: 999999,
    qty: 10
  },
{
  id:2,
  name: 'Viet dep zai',
  price: 999999,
  qty: 0
},
{
  id:3,
  name: 'Viet dep zai',
  price: 999999,
  qty: 5
}
]
  addStudent(){
  this.numberOfStudents++;
  this.textColor ='text-primary';
  }
  removeStudent(){
    if(this.numberOfStudents > 0)
  this.numberOfStudents--;
    if(this.numberOfStudents == 0)
      this.textColor = 'text-danger'
  }

}
