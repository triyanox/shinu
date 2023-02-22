# Shinu - Handle process exceptions in a more elegant way

[![Rate this package](https://badges.openbase.com/js/rating/shinu.svg?style=openbase&token=0/iL6XW8M+RUS1o8pkEVhDzGWFSYsSirsMxCAmaw8yQ=)](https://openbase.com/js/shinu?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

## Installation

You can install `Shinu` using your favorite package manager:

with `npm`:
```bash
npm install shinu
```

with `yarn`:
```bash
yarn add shinu
```
## Basic Usage

```ts
import { Shinu } from 'shinu';

const shinu = new Shinu();
shinu.start();
```

## Options

`Shinu` takes an optional `options` object as a parameter. The `options` object has the following properties:

- `handlers`: An array of `Handler` objects. Each `Handler` object has the following properties:
  - `signal`: The signal to listen for. Can be any of the following:
    - `SIGINT`
    - `SIGTERM`
    - `SIGQUIT`
    - `uncaughtException`
    - `unhandledRejection`;
  - `handler`: A function that will be called when the signal is received. 
- `logger`: You can pass a custom logger to `Shinu` or use the default one. The default logger is `console`. 
- `addHandler`: A function that takes a `Handler` object as a parameter and adds it to the `handlers` array.
- `removeHandler`: A function that takes a `Handler` object as a parameter and removes it from the `handlers` array.
- `removeAllHandlers`: A function that removes all the handlers from the `handlers` array.
- `start`: A function that starts listening for the signals.
- `handleUncaughtException`: A boolean that determines whether `Shinu` should handle `uncaughtException` or not. Defaults to `false`.
- `handleUnhandledRejection`: A boolean that determines whether `Shinu` should handle `unhandledRejection` or not. Defaults to `false`.
- `debug`: A boolean that determines whether `Shinu` should run in debug mode or not. Defaults to `false`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
