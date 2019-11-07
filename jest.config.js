module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
    "testPathIgnorePatterns": [
      "./src/__tests__/setupEnzyme.ts"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!/node_modules/"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx"
    ],
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/src/__tests__/setupEnzyme.ts"
    ],
    "moduleNameMapper": { 
      "\\.(css|less|scss|sass)$": "identity-obj-proxy" 
    }
  }