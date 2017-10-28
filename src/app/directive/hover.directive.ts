import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color: string;

  constructor(private el: ElementRef) {
     console.log(el);
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('click') onclick() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseout') onmouseout() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

}
