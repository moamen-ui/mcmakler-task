This is my task for McMacler company.


## Used Technologies

* Angular 5, because it famoust framwork to build a single page application (SPA).
* SASS for style, to make CSS more maintainable, themeable, and extendable.
* [Materialize-css](http://materializecss.com/), because the task recomend to use Material design concepts, I've used it via `npm i materialize-css` to import only used styles into my style.


## Development server

to run the development server you must install:
1. [nodejs](https://nodejs.org/)
1. Angular cli `npm install -g @angular/cli`

After that make sure you are in the project folder, then run `npm i` to insatll all packages.
Finally run `ng serve -o` to strat angular project and open it on your default browser.

## Production

for production build, just run this `ng build -prod`, you will find "dist" folder next of "src" folder to use it.


---------------

## CORS problem

you may face a CORS problem, so there is a copy of the api json on file `db.json` next of `pakage.json`, to use it as api provider follow that:
1. run `npm i json-server -g` to install json server for our db.json api
1. run `json-server db.json` to start json server, will provide a URL for the api.
1. replace the url placed in `src/app/adv.service.ts` with new api url `http://localhost:3000/db`
