/// <reference path="./state-machine.d.ts" />
import { add, subtract, multiply, divide } from './math';
import { isNumber, isNull } from 'util';

// TYPES
type currentState = state;
type updatedState = state;

// Public
export default class Machine {
  state: state;

  constructor(state = initialState) {
    this.state = state;
  }

  transition(val: payload): void {
    this.state = handleTransition(this.state, val);
  }

  clear(): void {
    this.state = initialState
  }
}

// Private
const initialState: state = {
  current: 'input1',
  input1: null,
  input2: null,
  operand: null,
  readout: 0,
};

const handleTransition = (currentState: currentState = initialState, payload: payload): updatedState => {
  const updatedState = isNumber(payload)
    ? handleDigitTransition(currentState, payload)
    : handleOperandTransition(currentState, payload);

  return updatedState;
};

const handleDigitTransition = (state: state, val: number): state => {
  switch (state.current) {
    case 'input1':
      return {
        ...state,
        input1: appendNumber(state.input1, val),
        readout: appendNumber(state.input1, val),
      };
    case 'operand':
      return {
        ...state,
        input2: val,
        readout: val,
        current: 'input2',
      };
    case 'input2':
      return {
        ...state,
        input2: appendNumber(state.input2, val),
        readout: appendNumber(state.input2, val),
      };
    default:
      return state;
  }
};

const handleOperandTransition = (state: state, val: operand): state => {
  switch (state.current) {
    case 'input1':
      return {
        ...state,
        operand: val,
        current: 'operand',
        readout: calcTotal(state)
      };
    case 'operand':
      return {
        ...state,
        operand: val,
      };
    case 'input2':
      return {
        ...state,
        input1: calcTotal(state),
        operand: val,
        input2: null,
        readout: calcTotal(state),
        current: 'input2',
      };
    default:
      return state;
  }
};

const appendNumber = (x: number | null, y: number): number => {
  if (isNull(x)) {
    return y;
  }

  return Number.parseInt(`${x}${y}`);
};

const calcTotal = (state: state): number => {
  if (isNull(state.input1) || isNull(state.input2)) {
    return state.readout;
  }

  switch (state.operand) {
    case 'add':
      return add(state.input1, state.input2);
    case 'subtract':
      return subtract(state.input1, state.input2);
    case 'multiply':
      return multiply(state.input1, state.input2);
    case 'divide':
      return divide(state.input1, state.input2);
    case 'equals':
    default:
      return state.readout; 
  }
};
