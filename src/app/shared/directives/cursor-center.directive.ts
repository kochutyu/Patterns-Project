import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCursorCenter]'
})
export class CursorCenterDirective {

  @Input()
  isClick: boolean;

  private _classPulse = 'hover-center';
  private _classPulseClick = 'click';

  constructor(
    private el: ElementRef,
    private r: Renderer2
  ) {
  }

  @HostListener('click', ['$event']) onClick(): void {
    if (!this.isClick) {
      return;
    }

    this.r.removeClass(this.el.nativeElement, this._classPulse);
    setTimeout(_ => this._setClickStyle(), 100);
  }

  @HostListener('mouseenter') onEnter(): void {
    if (!this.isClick) {
      return;
    }
    this.r.removeClass(this.el.nativeElement, this._classPulseClick);
  }

  private _setClickStyle(): void {
    this.r.addClass(this.el.nativeElement, this._classPulse);
    this.r.addClass(this.el.nativeElement, this._classPulseClick);
  }

}
