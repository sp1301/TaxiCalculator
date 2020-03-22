import { Directive, ElementRef, Renderer2, Input, OnChanges  } from '@angular/core';

@Directive({
  selector: '[appDateValidator]'
})
export class DateValidatorDirective implements OnChanges{

  @Input('Text')
  private DateText: string;

  private el: ElementRef;
  private render: Renderer2;

  constructor(el: ElementRef, render: Renderer2) { 
    this.el = el;
    this.render = render;
  }

  ngOnChanges(){
    
    if(this.el.nativeElement.children[0].value == "")
      this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "White");
    else{
      if(!Date.parse(this.DateText))
        this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "IndianRed");
      else
        this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "White");
    }
  }
}
