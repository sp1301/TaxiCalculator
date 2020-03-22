import { Directive, ElementRef, Renderer2, Input, OnChanges  } from '@angular/core';

@Directive({
  selector: '[appNumberValidator]'
})
export class NumberValidatorDirective implements OnChanges {

  @Input('Text')
  private NumberText: string;

  private el: ElementRef;
  private render: Renderer2;

  constructor(el: ElementRef, render: Renderer2) { 
    this.el = el;
    this.render = render;
  }
  ngOnChanges(){

    var temp = Number(this.NumberText);

    if(this.el.nativeElement.children[0].value == "" || this.el.nativeElement.children[0].value == "0")
      this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "White");
    else{
      if(!temp || temp < 0)
        this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "IndianRed");
      else
        this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "White");
    }
  }

}
