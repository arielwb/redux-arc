module.exports = {
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: "./coverage",
  globals: {
    BABEL_ENV: "commonjs",
    'ts-jest': {
      diagnostics: false
    }
  },
  "modulePathIgnorePatterns": [
    "<rootDir>/_book/"
  ],
  "testURL": "http://localhost"
}
