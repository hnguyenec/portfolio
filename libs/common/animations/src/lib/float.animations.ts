import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const floatFadeUp: AnimationTriggerMetadata = trigger('floatUp', [
	transition(':enter', [
		style({ opacity: 0, transform: 'translateY(.5rem)' }),
		animate('.3s 300ms ease-out', style({ opacity: 1, transform: 'translateY(0rem)' }))
	]),
	transition(':leave', [animate('.2s ease-in-out', style({ opacity: 0 }))])
]);
