import Machine from './state-machine';

test('initial state', () => {
  const machine = new Machine();
  expect(machine.state.readout).toEqual(0);
});

test('basic operations', () => {
  const machine = new Machine();

  machine.transition(2);
  machine.transition('add');
  machine.transition(2);
  machine.transition('equals');

  expect(machine.state.readout).toEqual(4);
});

test('multiple step operations', () => {
  const machine = new Machine();

  machine.transition(5);
  machine.transition('multiply');
  machine.transition(2);
  machine.transition('subtract');
  expect(machine.state.readout).toEqual(10);
  machine.transition(4);
  machine.transition('divide');
  expect(machine.state.readout).toEqual(6);
  machine.transition(2);
  machine.transition('equals');
  expect(machine.state.readout).toEqual(3);
});
