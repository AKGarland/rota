export default {
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'mjs',
  ],
  modulePathIgnorePatterns: [
    './node_modules/',
  ],
  roots: [
    './src',
    './test/unit',
  ],
  snapshotSerializers: [
    'jest-serializer-html',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/(*.)test.{js,jsx,mjs}',
  ],
  testPathIgnorePatterns: [
    './node_modules/',
    './dist/',
  ],
  transform: {
    '^.+\\.m?jsx?$': 'babel-jest',
  },
  setupFiles: [
    './test/setupTests.js',
  ],
};
