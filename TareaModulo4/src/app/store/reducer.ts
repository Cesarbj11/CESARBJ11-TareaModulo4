import { createReducer, on } from '@ngrx/store';
import { incrementTrackingTag, resetTrackingTags } from './actions';

export interface TrackingState {
  tags: { [key: string]: number };
}

export const initialState: TrackingState = {
  tags: {}
};

const _trackingReducer = createReducer(
  initialState,
  on(incrementTrackingTag, (state, { tag }) => {
    const currentCount = state.tags[tag] || 0;
    return {
      ...state,
      tags: {
        ...state.tags,
        [tag]: currentCount + 1
      }
    };
  }),
  on(resetTrackingTags, (state) => ({
    ...state,
    tags: {}
  }))
);

export function trackingReducer(state: any, action: any) {
  return _trackingReducer(state, action);
}