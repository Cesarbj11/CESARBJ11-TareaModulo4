import { createAction, props } from '@ngrx/store';

export const incrementTrackingTag = createAction(
  '[Tracking] Increment',
  props<{ tag: string }>()
);

export const resetTrackingTags = createAction('[Tracking] Reset');