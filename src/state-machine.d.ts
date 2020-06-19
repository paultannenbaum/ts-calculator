type operand = 'add' | 'subtract' | 'multiply' | 'divide' | 'equals';
type stateId = 'input1' | 'operand' | 'input2';
type state = {
  current: stateId;
  input1: number | null;
  input2: number | null;
  operand: operand | null;
  readout: number;
};
type payload = operand | number;
