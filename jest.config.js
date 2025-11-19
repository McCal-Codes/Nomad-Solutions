/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/__tests__'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    'public/widgets/availability-widget-simple.js',
    'public/widgets/fleet-widget-simple.js'
  ],
  coverageThreshold: {
    global: {
      lines: 50
    }
  }
};
