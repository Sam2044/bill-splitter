import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipResultsComponent } from './tip-results/tip-results.component';
import { BillParametersComponent } from './bill-parameters/bill-parameters.component';
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    TipResultsComponent,
    BillParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
