/**
 * `SIGINT` - The `SIGINT` signal is sent to a process by its controlling terminal when a user wishes to interrupt the process.
 * This is typically initiated by pressing Ctrl+C, but on some systems the "delete" character or "break" key can be used.
 */
type signals =
  | 'SIGINT'
  | 'SIGTERM'
  | 'SIGQUIT'
  | 'uncaughtException'
  | 'unhandledRejection';

/**
 * Handler function
 */
type handler = (signal: signals) => void;

/**
 * Handler interface
 */
interface IHandler {
  signal: signals;
  handler: handler;
}

/**
 * Shinu interface
 */
interface IShinu {
  /**
   * Array of handlers
   */
  handlers: IHandler[];
  /**
   * You can use your own logger or use the default one
   * @returns - void
   */
  logger: (message: string) => void;
  /**
   * Adds a handler for a signal
   * @param signal - Signal to be handled
   * @param handler - Handler function
   * @returns - void
   */
  addHandler: (signal: signals, handler: (signal: signals) => void) => void;
  /**
   * Removes a handler for a signal
   * @param signal - Signal to be removed
   * @returns - void
   */
  removeHandler: (signal: signals) => void;
  /**
   * Removes all handlers
   * @returns - void
   */
  removeAllHandlers: () => void;
  /**
   * Starts the shinu instance in `debug` mode
   */
  debug: boolean;
  /**
   * Starts the shinu instance
   * @returns - void
   */
  start: () => void;
  /**
   * Handles uncaught exceptions
   */
  handleUncaughtException: boolean;
  /**
   * Handles unhandled rejections
   */
  handleUnhandledRejection: boolean;
}

/**
 * Shinu options interface
 */
interface IShinuOptions {
  /**
   * Array of handlers
   */
  handlers?: IHandler[];
  /**
   * Logs the message
   */
  debug?: boolean;
  /**
   * You can use your own logger or use the default one
   * @param message - Message to be logged
   * @returns - void
   */
  logger?: (message: string) => void;
  /**
   * Handles uncaught exceptions
   */
  handleUncaughtException?: boolean;
  /**
   * Handles unhandled rejections
   */
  handleUnhandledRejection?: boolean;
}

export type { IHandler, IShinu, IShinuOptions, handler, signals };
