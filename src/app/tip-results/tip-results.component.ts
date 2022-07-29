import { Component, OnChanges, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'tip-results',
  templateUrl: './tip-results.component.html',
  styleUrls: ['./tip-results.component.css']
})
export class TipResultsComponent{
  
  constructor(private serv: CalculatorService){
    
  }

  
  get tip_amount_per_person(){ 
      return "$"+ this.serv.TipAmountPerPerson;
  }

  get total_amount_per_person(){
    return "$"+ this.serv.TotalAmountPerPerson;
  }
  
  onClick(){
    /*Reload page*/
    window.location.reload();
  }
    

 
}
