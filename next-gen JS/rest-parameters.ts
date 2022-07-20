function logger(msg: string, ...options): void {
  console.log(`MSG: ${msg}`);

  if (options && options.length) {
    options.forEach(o => {
      console.info(`INFO: ${o}`);
    });
  }
}

logger('I`m a message', 123, Date.now(), 'test test', [123, 234, 345]);
