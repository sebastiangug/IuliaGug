import { animate, transition, style, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  transition('void => *', [
    style({ position: 'relative', transform: 'translateX(-100%)' }),
    animate('400ms ease-in', style({ transform: 'translateX(0%)' }))
  ]),
  transition('* => void', [
    animate('400ms ease-in', style({ transform: 'translateX(-100%)' }))
  ])
]);
