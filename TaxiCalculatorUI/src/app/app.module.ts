import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//common
import { TextBoxComponent } from './Common/text-box/text-box.component';
import { ButtonComponent } from './Common/button/button.component';
import { HeaderComponent } from './Components/header/header.component';

//pages
import { CalculatorPageComponent } from './Components/calculator-page/calculator-page.component';

//Directives
import { DateValidatorDirective } from './Directives/Validators/Date/date-validator.directive';
import { TimeValidatorDirective } from './Directives/Validators/Time/time-validator.directive';
import { NumberValidatorDirective } from './Directives/Validators/Number/number-validator.directive';

//Services
import { CalculatorService } from './Services/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    ButtonComponent,
    HeaderComponent,
    CalculatorPageComponent,
    DateValidatorDirective,
    TimeValidatorDirective,
    NumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
