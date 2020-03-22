import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TextBoxSettings } from '../Models/TextBoxSettings'

@Component({
  selector: 'custom-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.less']
})
export class TextBoxComponent implements OnInit {

  //Settings for the TextBox
  @Input('Settings')
  private _Settings: TextBoxSettings;

  //EventEmitter for text in the textbox
  @Output()
  private submitEvent: EventEmitter<string>;

  //EventEmitter for text in the textbox
  @Output()
  private focusEvent: EventEmitter<void>;

  //EventEmitter for text in the textbox
  @Output()
  private blurEvent: EventEmitter<void>;
 
  public _Text: string;
  public _Focused: boolean;
  
  constructor() { 
    this._Settings = new TextBoxSettings();
    this._Text = "";
    this. _Focused = false;
    this.submitEvent = new EventEmitter<string>();
    this.focusEvent = new EventEmitter<void>();
    this.blurEvent = new EventEmitter<void>();

  }

  ngOnInit(): void {
  }

  public getSettings(): TextBoxSettings{
    return this._Settings;
  }

  public onFocus(): void{
    this._Focused = true;
    this.focusEvent.emit();
  }

  public onBlur(): void{
    this._Focused = false;
    this.blurEvent.emit();
  }

  public submitText(): void{
    this.submitEvent.emit(this._Text);
  }

}
