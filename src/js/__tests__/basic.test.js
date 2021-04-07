import fixPhones from '../app';

test('nomber 1', () => {
  expect(fixPhones('8 (927) 000-00-00')).toBe('+79270000000');
});

test('nomber 2', () => {
  expect(fixPhones('+7 960 000 00 00')).toBe('+79600000000');
});

test('nomber 3', () => {
  expect(fixPhones('+86 000 000 0000')).toBe('+860000000000');
});
