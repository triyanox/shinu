import { defaultOptions, log } from '../config/index';
import {
  handler,
  IHandler,
  IShinu,
  IShinuOptions,
  signals,
} from '../interfaces/index';

class Shinu implements IShinu {
  handlers: IHandler[] = [];
  debug: boolean = false;
  logger: (message: string) => void = (message) => console.log(message);
  handleUncaughtException: boolean = false;
  handleUnhandledRejection: boolean = false;

  constructor(options: IShinuOptions = defaultOptions) {
    if (options?.handlers) this.handlers = options.handlers;
    if (options?.debug) this.debug = options.debug;
    if (options?.logger) this.logger = options.logger;
    if (options?.handleUncaughtException)
      this.handleUncaughtException = options.handleUncaughtException;
    if (options?.handleUnhandledRejection)
      this.handleUnhandledRejection = options.handleUnhandledRejection;
  }

  addHandler(signal: signals, handler: (signal: signals) => void) {
    this.handlers.push({ signal, handler });
  }

  removeHandler(signal: signals) {
    this.handlers = this.handlers.filter((h) => h.signal !== signal);
  }

  removeAllHandlers() {
    this.handlers = [];
  }

  private _removeListener(signal: signals) {
    process.removeListener(signal, this._handlerWrapper);
  }

  private _handlerWrapper(handler: handler) {
    return (signal: signals) => {
      if (this.debug) this.logger(log(process));
      else this.logger(`Received signal ${signal}`);
      this._removeListener(signal);
      handler(signal);
    };
  }

  private _uncaughtException_d() {
    process.on('uncaughtException', (err) => {
      this.logger(`Uncaught exception: ${err}`);
      process.exit(1);
    });
  }

  private _unhandledRejection_d() {
    process.on('unhandledRejection', (err) => {
      this.logger(`Unhandled rejection: ${err}`);
      process.exit(1);
    });
  }

  start() {
    if (this.handleUncaughtException) {
      this._uncaughtException_d();
    }
    if (this.handleUnhandledRejection) {
      this._unhandledRejection_d();
    }
    this.handlers.forEach((h) => {
      if (this.debug) this.logger(`Registering handler for ${h.signal}`);
      process.on(h.signal, this._handlerWrapper(h.handler));
    });
  }
}

export default Shinu;
export { defaultOptions };
