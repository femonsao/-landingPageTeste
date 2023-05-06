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

export const APPEARDMOTOCYCLE = trigger('motocycleAnimation', [
  state(
    'ready',
    style({
      opacity: 1,
      transform: 'translateX(50%)',
    })
  ),

  transition('void => ready', [
    style({
      opacity: 0,
      transform: 'translateX(-40%)',
    }),
    animate('3000ms ease-in-out'),
  ]),
]);
