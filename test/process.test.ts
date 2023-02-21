import { fork } from 'child_process';

const child = fork('./test/utils/cp.js');

describe('Test instance', () => {
  it('The process exits with code 0', () => {
    child.on('exit', (code) => {
      expect(code).toBe(0);
    });
  });
});
