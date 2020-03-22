import { Directive, ElementRef, Renderer2, Input, OnChanges  } from '@angular/core';

@Directive({
  selector: '[appTimeValidator]'
})
export class TimeValidatorDirective implements OnChanges{

  @Input('Text')
  private TimeText: string;

  private el: ElementRef;
  private render: Renderer2;

  constructor(el: ElementRef, render: Renderer2) { 
    this.el = el;
    this.render = render;
  }

  ngOnChanges(){
    var regexp = new RegExp('^ *(1[0-2]|[1-9]):[0-5][0-9] *(a|p|A|P)(m|M) *$');

    if(this.el.nativeElement.children[0].value == "")
      this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "White");
    else{
      if(!regexp.test(this.TimeText))
        this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "IndianRed");
      else
        this.render.setStyle(this.el.nativeElement.children[0], "borderColor", "White");
    }
  }

}
