module.exports = {
  packages: {
    '@angular/material-moment-adapter': {
      ignorableDeepImportMatchers: [
        /moment\//
      ]
    },
    '@danielmoncada/angular-datetime-picker':{
      ignorableDeepImportMatchers: [
        /moment\//
      ]
    },
    'moment': {
      ignoreMissingDependencies: true
    }
  }
};
