import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test('reducer should change value to opposite (true)', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(true)
})

test('reducer should change value to opposite (false)', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error', () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "FAKE_TYPE"}
        )
    }).toThrowError()
})