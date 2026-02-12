// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     charts: true,
//     embededdedScreenshots: true,
//     inlineassets: true,
//     overwrite: true,
//     html: false,
//     json: true,
//     code:false
//   },
//   screenshotsFolder: 'cypress/screenshots',
//   screenshotOnRunFailure: true,

  

//   e2e: {
//     specPattern: 'cypress/e2e/**/*.cy.js',
//     baseUrl: "https://www.codechef.com",
//     env: {
//       host:"https://www.codechef.com"
//   },
//   }
// });
const { defineConfig } = require('cypress')
screenshotsFolder: 'cypress/screenshots',
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress-mochawesome-reporter',
    overwrite: true,
    html: false,   // VERY IMPORTANT
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,   // ⭐ VERY IMPORTANT
    inlineAssets: true,          // ⭐ required for embedding
    saveAllAttempts: false,
    json: true,
    reportFilename: "[name]-report",
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    code: false
  },

  e2e: {
    video: true,
    videoUploadOnPasses: true,
    videosFolder: 'cypress/videos',
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: "https://www.codechef.com",
     setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
})


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',

//   e2e: {
//      baseUrl: "https://www.codechef.com",
//      env: {
//        host:"https://www.codechef.com"
//    },
//     specPattern: 'cypress/e2e/**/*.cy.js',
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
// });
