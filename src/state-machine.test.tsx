import Machine from './state-machine';

test('initial state', () => {
  const machine = new Machine();

  expect(machine.state).toEqual({
    current: 'input1',
    input1: null,
    input2: null,
    operand: null,
    readout: null,
  });
});

test('basic operations', () => {
  const machine = new Machine();

  machine.transition(2);
  machine.transition('add');
  machine.transition(2);
  machine.transition('equals');

  expect(machine.state.readout).toEqual(4);
});
