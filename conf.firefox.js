// An example configuration file.
exports.config = {
  directConnect: true,
  capabilities:
  {
     browserName: 'firefox' ,
     firefoxOptions: {
//         args: ['--headless']
     },
     "moz:firefoxOptions": {
//         binary:'/home/jenkins/firefox/firefox'
//         args: [ '--headless' ]
     }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
  },

  allScriptsTimeout: 360000
};