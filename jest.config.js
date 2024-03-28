const nextJest = require('next/jest');

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFiles: ['<rootDir>/src/tests/dotenv-config.js']
});

module.exports = jestConfig;
