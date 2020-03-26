import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Directive({
  selector: '[appBlur]',
})
export class BlurDirective {
  @Output() changed = new EventEmitter();
  timerSubscription: Subscription;
  @HostListener('mouseenter', ['$event'])
  onEnter($event) {
    console.log('EVENT MOUSENETER');

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    $event.preventDefault();
    this.changed.emit(true);
  }

  @HostListener('mouseleave', ['$event'])
  onLeave($event) {
    console.log('EVENT MOUSELEAVE');

    this.timerSubscription = timer(80).subscribe(() => {
      $event.preventDefault();
      this.changed.emit(false);
      this.timerSubscription.unsubscribe();
    });
  }
}
