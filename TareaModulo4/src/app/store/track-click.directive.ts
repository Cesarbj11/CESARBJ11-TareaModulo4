import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementTrackingTag } from './actions';

@Directive({
  selector: '[appTrackClick]'
})
export class TrackClickDirective {
  @Input('appTrackClick') trackingTag: string;

  constructor(private el: ElementRef, private store: Store) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.store.dispatch(incrementTrackingTag({ tag: this.trackingTag }));
  }
}