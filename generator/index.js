module.exports = (api, options, rootOptions) => {
    api.extendPackage({
      dependencies: {
        axios: "^0.18.0"
      }
    });
  
    api.render(
      {
        "./src/plugins/bus/index.js": "./templates/plugins/bus/index.js"
      },
      options
    );
  
    const fs = require("fs");
    const helpers = require('./helpers')(api)
  
    api.onCreateComplete(() => {
      helpers.updateMain(src => {
      });
    });
  };
  