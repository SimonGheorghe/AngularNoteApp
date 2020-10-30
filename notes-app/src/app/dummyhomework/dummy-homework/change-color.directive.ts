import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appChangeColor') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.colorText(this.color || this.defaultColor || 'gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorText(null);
  }

  private colorText(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
