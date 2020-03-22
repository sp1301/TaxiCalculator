import { Component, OnInit } from '@angular/core';
import { ButtonSettings } from '../../Common/Models/ButtonSettings';
import { TextBoxSettings } from '../../Common/Models/TextBoxSettings';
import { UserInputModel } from '../../Models/UserInputModel';
import { CalculatorService } from '../../Services/calculator.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.less']
})
export class CalculatorPageComponent implements OnInit {
  public _ButtonSettings: ButtonSettings;
  public _DateTextBoxSettings: TextBoxSettings;
  public _StartTimeTextBoxSettings: TextBoxSettings;
  public _BelowTextBoxSettings: TextBoxSettings;
  public _AboveTextBoxSettings: TextBoxSettings;
  public userInput: UserInputModel;
  public ErrorText: string = "";
  public TotalCost: string = "";

  constructor(private _CalculatorService: CalculatorService){}

  ngOnInit(){
    
    this._ButtonSettings = new ButtonSettings()
      .setText("Submit")
      .setColor("rgb(65, 10, 65)")
      .setTextColor("White")
      .setHeight("34px")
      .setWidth("104px");
    this._DateTextBoxSettings = new TextBoxSettings().setPlaceHolderText("Enter Date...");
    this._StartTimeTextBoxSettings = new TextBoxSettings().setPlaceHolderText("Enter Time...");
    this._BelowTextBoxSettings = new TextBoxSettings().setPlaceHolderText("Enter Number...");
    this._AboveTextBoxSettings = new TextBoxSettings().setPlaceHolderText("Enter Number...");
    this.userInput = new UserInputModel();
  }

  public submittedDate(event): void{
    this.userInput.RideDate = event;
  }
  public submittedStartTime(event): void{
    this.userInput.RideStartTime = event;
  }
  public submittedBelow(event): void{
    this.userInput.BelowSix  = event;
  }
  public submittedOver(event): void{
    this.userInput.OverSixOrStationary = event;
  }

  public GetSum():void{  
    var checked = this.checkInputs();

    if(checked){
      this.ErrorText = "";
      this._CalculatorService.GetTotalSum(this.userInput).then((Result: string) => {
        console.log(Result);
        this.TotalCost = Result;
      }).catch(() =>{
        this.ErrorText = "Network Error...";
        this.TotalCost ="";
      });
    }
    else{
      this.TotalCost = "";
      this.ErrorText = "One or more inputs were not provided or is in the wrong format...";
    }

  }

  public checkInputs(): boolean{
        //date check
      if(!Date.parse(this.userInput.RideDate))
        return false;
  
      //Time check
      var regexp = new RegExp('^ *(1[0-2]|[1-9]):[0-5][0-9] *(a|p|A|P)(m|M) *$');
      if(!regexp.test(this.userInput.RideStartTime))
        return false;
  
      //number check
      if(!Number(this.userInput.BelowSix) || Number(this.userInput.BelowSix) < 0)
        return false;
  
      //number check
      if(!Number(this.userInput.OverSixOrStationary) || Number(this.userInput.OverSixOrStationary) < 0)
      return false;

      return true;
  }

}
