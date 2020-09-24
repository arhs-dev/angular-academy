import { Directive, ElementRef, HostListener } from '@angular/core';

// Directives are added on top of elements or components.
// They give the components extra functionality or styling.
// The below directive makes each item of the movies-list blue
// when the user hovers on top of it. Don't forget to hover on the
// angular functions you don't understand!
@Directive({
  selector: '[appMovieHighlighter]',
})
export class MovieHighlighterDirective {
  constructor(private elementReference: ElementRef) {}

  @HostListener('mouseenter')
  addHighlight() {
    this.elementReference.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.elementReference.nativeElement.style.color = 'black';
  }
}
