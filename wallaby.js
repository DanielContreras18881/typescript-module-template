module.exports = function (w) {

  return {
    env: {
      type: 'node'
    },

    files: [
      'src/**/*.ts'
    ],

    tests: [
      'test/**/*.ts'
    ],

    testFramework: 'mocha'
  };
};
