import { trackingReducer, TrackingState, initialState } from './reducer';
import { incrementTrackingTag, resetTrackingTags } from './actions';

describe('Tracking Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any; // Acción vacía
    const state = trackingReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should increment the tracking tag count', () => {
    const action = incrementTrackingTag({ tag: 'marker' });
    const state = trackingReducer(initialState, action);
    expect(state.tags['marker']).toEqual(1);
  });

  it('should increment the tracking tag count for the same tag', () => {
    const initialAction = incrementTrackingTag({ tag: 'marker' });
    const intermediateState = trackingReducer(initialState, initialAction);
    const action = incrementTrackingTag({ tag: 'marker' });
    const finalState = trackingReducer(intermediateState, action);
    expect(finalState.tags['marker']).toEqual(2);
  });

  it('should reset the tracking tags', () => {
    const action = resetTrackingTags();
    const stateWithTags = {
      tags: {
        marker: 2,
        button: 1
      }
    };
    const state = trackingReducer(stateWithTags, action);
    expect(state.tags).toEqual({});
  });
});