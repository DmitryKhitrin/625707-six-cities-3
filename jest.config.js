module.exports = {
  preset: `ts-jest`,
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  verbose: true,
  transform: {
    "^.+\\.js?$": `babel-jest`,
    "^.+\\.(ts|tsx)?$": `ts-jest`
  },
  testRegex: `(.(test))\\.(ts|tsx)$`,
  transformIgnorePatterns: [`^.+\\.js$`],
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `json`
  ],
  moduleDirectories: [`node_modules`, `src`],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      `<rootDir>/assetTransformer.js`,
    "\\.(css|less|scss)$": `<rootDir>/assetTransformer.js`
  },
  testEnvironment: `jsdom`,
};
