import { Component, OnInit, Input } from '@angular/core';
import { ButtonSettings } from '../Models/ButtonSettings';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input('Settings')
  private _Settings : ButtonSettings;

  constructor() { 
    this._Settings = new ButtonSettings();
  }

  ngOnInit(){}

  public getSettings(): ButtonSettings{
    return this._Settings;
  }
}
