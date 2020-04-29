module.exports = {
  verbose: true,
  testMatch: ['**/*.steps.js'], // test & steps
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  // collectCoverage: true,
  // coverageReporters: ['html', 'text-summary'],
  // collectCoverageFrom: ['src/components/*.{js,vue}', '!**/node_modules/**'],
};
