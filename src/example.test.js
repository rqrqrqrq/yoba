import sum, { mapThroughObject } from './example';

test('my testcase', () => {
  expect(sum(1, 2)).toBe(3);
});

test('another testcase', () => {
  expect(
    mapThroughObject((v: string): string => `1${v}`, { a: 1, b: 2, c: 3 }),
  ).toEqual(['11', '12', '13']);
});
