// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  config: {
    apiKey: "AIzaSyC8DYG09uik2BS83HtZmHSQ2GB6I8i1aus",
    authDomain: "ingard-27df5.firebaseapp.com",
    databaseURL: "https://ingard-27df5.firebaseio.com",
    projectId: "ingard-27df5",
    storageBucket: "ingard-27df5.appspot.com",
    messagingSenderId: "1009882375330"
  }
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
