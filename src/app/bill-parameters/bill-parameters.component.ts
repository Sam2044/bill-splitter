import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'bill-parameters',
  templateUrl: './bill-parameters.component.html',
  styleUrls: ['./bill-parameters.component.css']
})
export class BillParametersComponent {

  Bill = 0;
  NumberOfPeople = 0;
  TipSelected = 0;
  TipAmountPerPerson = 0;
  TotalAmountPerPerson = 0;
  ShowCustomButton = true;
  CustomTip=0;

  //Number of People field has just been "touched" i.e, 
  //tip button selected without any value in the number of people field
  touched = false;
    
  constructor(private service: CalculatorService){
        
  }
  

  isFocused: boolean = false;

  onFocus(){
    this.isFocused = !this.isFocused;
  }

  public calculateTipAmount(){
    this.TipAmountPerPerson = ((Number(this.TipSelected)/100)*Number(this.Bill))/Number(this.NumberOfPeople);
    return this.TipAmountPerPerson;
  }

  public calculateTotalAmountPerPerson(){
    this.TotalAmountPerPerson = this.Bill/this.NumberOfPeople + this.TipAmountPerPerson;
    return this.TotalAmountPerPerson;
  }

  tipSelector(value: number, bill:number,number_of_people:number){
    if(number_of_people==0){
      this.touched=true;
      return;
    }
    this.TipSelected = value;
    this.NumberOfPeople = Number(number_of_people);
    this.Bill = Number(bill);
    this.calculateTipAmount();
    this.calculateTotalAmountPerPerson();
    console.log(this.TipSelected,this.Bill, this.NumberOfPeople, this.calculateTipAmount(), this.calculateTotalAmountPerPerson());
    this.service.TipAmountPerPerson = this.TipAmountPerPerson.toFixed(2);
    this.service.TotalAmountPerPerson = this.TotalAmountPerPerson.toFixed(2);
  }

  customOnClick(){
    // change button to input field
    this.ShowCustomButton = false;
  }

 

}
