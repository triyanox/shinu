# Shinu - Elegant Process Exception Handling

[![Rate this package](https://badges.openbase.com/js/rating/shinu.svg?style=openbase&token=0/iL6XW8M+RUS1o8pkEVhDzGWFSYsSirsMxCAmaw8yQ=)](https://openbase.com/js/shinu?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

Shinu is a lightweight Node.js library that makes it easy to handle signals and other process events in your application. It provides a simple interface for registering signal handlers and logging process information.

## Features

- Simple API for adding and removing signal handlers
- Default signal handlers for common signals (SIGINT, SIGTERM, SIGQUIT)
- Option to log process information for debugging purposes
- Option to handle uncaught exceptions and unhandled rejections

## Installation

You can install Shinu using npm or yarn:

```bash
npm install shinu
```

or

```bash
yarn add shinu
```

## Usage

Here's an example of how to use Shinu to handle the SIGINT signal:

```js
const { Shinu } = require('shinu');

const shinu = new Shinu();

shinu.addHandler('SIGINT', (signal) => {
  console.log(`Received ${signal}`);
  process.exit(0);
});

shinu.start();
```

In this example, we create a new `Shinu` instance and add a handler for the `SIGINT` signal. The handler simply logs a message and exits the process. We then call the `start` method to begin listening for signals.

By default, Shinu includes handlers for the `SIGINT`, `SIGTERM`, and `SIGQUIT` signals, so you don't need to add these manually.

You can also pass options to the `Shinu` constructor to customize its behavior:

```js
const { Shinu } = require('shinu');

const shinu = new Shinu({
  debug: true,
  handlers: [
    {
      signal: 'SIGUSR1',
      handler: (signal) => {
        console.log(`Received ${signal}`);
      },
    },
  ],
});

shinu.start();
```

In this example, we pass an options object to the `Shinu` constructor to enable debug logging and add a custom signal handler for `SIGUSR1`.

## API

### `new Shinu(options: IShinuOptions)`

Creates a new `Shinu` instance with the specified options.

```js
const shinu = new Shinu({
  debug: true,
  handlers: [
    {
      signal: 'SIGUSR1',
      handler: (signal) => {
        console.log(`Received ${signal}`);
      },
    },
  ],
});
```

#### `options.debug`

Type: `boolean`
Default: `false`

Enables debug mode. When debug mode is enabled, Shinu will log detailed process information for each signal received.

#### `options.handlers`

Type: `IHandler[]`
Default: `[]`

An array of signal handlers to register when the `Shinu` instance is started.

#### `options.logger`

Type: `(message: string) => void`
Default: `console.log`

A function that will be called to log messages. You can use your own logger or replace the default `console.log` method.

#### `options.handleUncaughtException`

Type: `boolean`
Default: `false`

Enables handling of uncaught exceptions. When this option is enabled, Shinu will log any uncaught exceptions and exit the process.

#### `options.handleUnhandledRejection`

Type: `boolean`
Default: `false`

Enables handling of unhandled rejections. When this option is enabled, Shinu will log any unhandled rejections and exit the process.

### `shinu.addHandler(signal: signals, handler: handler)`

Adds a handler function for the specified signal.

```js
shinu.addHandler('SIGUSR1', (signal) => {
  console.log(`Received ${signal}`);
});
```

### `shinu.removeHandler(signal: signals, handler?: handler)`

Removes the specified handler function for the specified signal. If no handler function is provided, removes all handlers for the signal.

```js
shinu.removeHandler('SIGUSR1');
```

### `shinu.removeAllHandlers()`

Removes all registered signal handlers.

```js
shinu.removeAllHandlers();
```

### `shinu.start()`

Starts listening for registered signals and runs any associated handlers.

```js
shinu.start();
```

### `shinu.isHandlerAdded(signal: signals, handler: handler)`

Returns `true` if the specified handler function is registered for the specified signal, `false` otherwise.

```js
const isHandlerAdded = shinu.isHandlerAdded('SIGUSR1', myHandlerFunction);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
