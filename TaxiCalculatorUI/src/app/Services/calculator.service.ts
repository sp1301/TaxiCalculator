import { Injectable } from '@angular/core';
import { UserInputModel } from '../Models/UserInputModel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public GetTotalSum(inputs:UserInputModel): Promise<string>{

    return this.http.get<string>(environment.apiEndpoint + '/api/calculations/taxicalculation?' 
    + 'date=' + inputs.RideDate
    + '&time=' + inputs.RideStartTime
    + '&below=' + inputs.BelowSix
    + '&over=' + inputs.OverSixOrStationary).toPromise();
  }


}
