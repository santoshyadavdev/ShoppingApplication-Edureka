import { HoverDirective } from './hover.directive';
import { ElementRef } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const directive = new HoverDirective(el);
    expect(directive).toBeTruthy();
  });
});
