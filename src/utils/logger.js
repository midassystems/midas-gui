// logger.js
import log from 'loglevel';

// Set log level based on the environment
const setLogLevel = () => {
  const level = process.env.NODE_ENV === 'development' ? 'debug' : 'warn';
  log.setLevel(level);
};

setLogLevel();

export default log;
