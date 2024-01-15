import Awesome from '../index';

describe('correct sum', () => {
  test('should match A+B', () => {
    expect(Awesome.add(2, 2) === 4).toBeTruthy();
  });
});
