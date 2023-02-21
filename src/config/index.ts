import { IShinuOptions } from '../interfaces/shinu.interface';

const defaultOptions: IShinuOptions = {
  handlers: [
    {
      signal: 'SIGINT',
      handler: (signal) => {
        console.log(`Received ${signal}`);
        process.exit(0);
      },
    },
    {
      signal: 'SIGTERM',
      handler: (signal) => {
        console.log(`Received ${signal}`);
        process.exit(0);
      },
    },
    {
      signal: 'SIGQUIT',
      handler: (signal) => {
        console.log(`Received ${signal}`);
        process.exit(0);
      },
    },
  ],
  debug: false,
  handleUncaughtException: false,
  handleUnhandledRejection: false,
};

/**
 * The `log` function formats the process information in a readable way
 * @param process - The process object
 * @returns - A string with the process information
 */
const log = (process: NodeJS.Process) => `
    Process id: ${process.pid}
    Process title: ${process.title}
    Process platform: ${process.platform}
    Process architecture: ${process.arch}
    Process version: ${process.version}
    Process release: ${process.release}
    Process uptime: ${process.uptime()}
    Process memory usage: ${JSON.stringify(process.memoryUsage())}
    Process cpu usage: ${JSON.stringify(process.cpuUsage())}
    Process exec path: ${process.execPath}
    Process exec arg: ${JSON.stringify(process.execArgv)}
    Process argv: ${JSON.stringify(process.argv)}
`;

export { defaultOptions, log };
