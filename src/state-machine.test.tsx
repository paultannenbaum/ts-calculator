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

test('consecutive number transitions', () => {
  const machine = new Machine();

  machine.transition(5);
  machine.transition(0);
  machine.transition(0);
  machine.transition('subtract');
  machine.transition(1);
  machine.transition(0);
  machine.transition(0);
  machine.transition('equals');
  expect(machine.state.readout).toEqual(400);
});

test('consecutive operand transitions', () => {
  const machine = new Machine();

  machine.transition(5);
  machine.transition(0);
  machine.transition(0);
  machine.transition('subtract');
  machine.transition('add');
  machine.transition(1);
  machine.transition(0);
  machine.transition(0);
  machine.transition('equals');
  expect(machine.state.readout).toEqual(600);
})

// TODO: Add in this test
test('Bad arithmetic', () => {
  expect(true).toBe(true)
})

// TODO: Add in this test
test('Random user input', () => {
  expect(true).toBe(true)
})
