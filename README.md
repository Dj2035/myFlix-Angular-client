# MyFlixAngularClient

![myFlix-client-Angular](src/angular.png)

## Description

The aim of this project is to build the client-side for an application called myFlix using Angular based on its existing server-side code (REST API and database), with supporting documentation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Key Features

- Welcome view where users are able to either log in or register an account
- Upon authentication, display a view of all movie cards
- A link to director, genre and movie synopsis should be available in case user wants to see more information about movie
- A botton for added movie to favorite list should also be present on card

### Create a new Angular project

1. Navigate to folder and create project

```bash
ng new my-project-name
```

2. Navigate to project folder to run project

```bash
ng serve --open
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Set up app to load data from movie API

1. Set up Angular HttpClient
   1.1. Go to app.module.ts and add

```bash
import { HttpClientModule } from '@angular/common/http';
```
   1.2. Add HttpClientModule to the imports of @NgModule

2. Create Angular Service for Consuming REST API
   2.1 Create a new Service inside app folder
```bash
ng generate service fetch-api-data
```
2.2. Add import statements to fetch-api-data.service.ts file
```bash
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
```
3. Implement services logic to make API calls
- User registration
- User login
- Get all movies
- Get one movie
- Get director
- Get genre
- Get user
- Get favourite movies for a user
- Add a movie to favourite Movies
- Edit user
- Delete user and
- Delete a movie from the favorite movies

### Add Angular Material to application

1. Install project dependency
```bash
$ ng add @angular/material
```
2. Import models from Angular Material to app.module.ts

3. Add modules to imports array to serve to other components

### Create components for user to use application

Using the command:
```bash
$ ng generate component my-component-name
```

Structure of components:
- Welcome screen
  - User registration form (signup)
  - User login form
- Navbar
- Movie Card View
- Dialogs for Movie Card:
  - Director
  - Genre
  - Synopsis
- Profile View
  - Edit profile dialog

### Add routing to application
1. Import Angular's built-in router:
```bash
import { RouterModule, Routes } from '@angular/router';
```
2. Add to app.component.html
```bash
<router-outlet></router-outlet>
```
3. Create routes in app.module.ts

### Deploy application on github pages
1. If not done yet: Create github repository for application

2. If also not done yet: Link the new remote repository to the local project folder. To do so, simply run this command from inside your project folder (replace <GitHub-username> and <repository-name> with your own GitHub username and repository name): git remote add origin https://github.com/<GitHub-username>/<repository-name>.git

3. Add angular-cli-ghpages by running
```bash
ng add angular-cli-ghpages.
```
4. Build your application (i.e., generate static HTML, CSS, and JavaScript files out of your application so that browsers can interpret them without the need to use any extra tools/plugins). To do so, run the following command, replacing <repository-name> with your own repository name:

```bash
 ng deploy --base-href=/<repository-name>/.
```
### Add TypeDoc Documentation
1. Install typedoc (if not yet installed):
```bash
npm install typedoc
```
2. Check that code is commented adhering to best practices

3. Run typedoc to create documentation:

```bash
typedoc --entryPointStrategy expand ./src
```