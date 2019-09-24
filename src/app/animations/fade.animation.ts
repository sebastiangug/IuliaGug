import { trigger, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', [
    style({ position: 'static', opacity: 0 }),
    animate('400ms ease-in', style({ opacity: 1 }))
  ]),
  transition('* => void', [
    style({ opacity: 1, position: 'absolute' }),
    animate('400ms ease-in', style({ opacity: 0, position: 'absolute' }))
  ])
]);
