import Shinu from '../src/index';

describe('Test instance', () => {
  const shinu = new Shinu();

  it('should have the correct properties from the default options', () => {
    expect(shinu.handlers.length).toBe(3);
    expect(shinu.handlers[0].signal).toBe('SIGINT');
    expect(shinu.handlers[0].handler).toBeInstanceOf(Function);
    expect(shinu.logger).toBeInstanceOf(Function);
    expect(shinu.debug).toBe(false);
    expect(shinu.handleUncaughtException).toBe(false);
    expect(shinu.handleUnhandledRejection).toBe(false);
  });
});
