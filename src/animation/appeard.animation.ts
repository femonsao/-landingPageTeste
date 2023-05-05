import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const APPEARD = trigger('appeard', [
  state(
    'ready',
    style({
      opacity: 1,
    })
  ),
  transition('void => ready', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('500ms 0s ease-in'),
  ]),
]);

export const SLIDEINLEFT = trigger('slideInLeft', [
  state(
    'ready',
    style({
      opacity: 1,
      transform: 'translateX(0%)',
    })
  ),
  transition('void => ready', [
    style({
      opacity: 0,
      transform: 'translateX(100%)',
    }),
    animate('500ms ease-in-out'),
  ]),
]);
