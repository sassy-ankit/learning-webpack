# Webpack

---

Webpack is used to link up or combine various JS module used in a project in one to few bundled files which will help to reduce load time by reducing HTTP request to server. _More description need to add at later stage_

---

## Chapter 1 - Getting Started

Bare minimum configuration to get Webpack up and running

1. To get started, first install webpack as dev-dependency in your JS project
   `$ npm install webpack --save-dev` or
   in short-hand `$ npm i webpack -D`

  For more details, [click here](001-getting_started/README.md)

---

## Chapter 2 - Module Loaders

**Module Loaders are used to some pre-processing before they are added to final `bundle.app.js`. In nutshell, loaders are used to enhance the behavior of webpack in some fashion. This is one of the many features in Webpack.**

Loaders are commonly used for transpiling ES2015/ES6 code to older ES5 code (which is supported by all the browsers). Also css, images and all different types of files can be handled with the help of 'module loaders'.

I) Lets start with first commonly used loader `babel-loader`:
  For more details, [click here](002-loaders_basics/README.md)

---

## Chapter 3 - Module Loaders - Handling CSS (Bundling CSS into JS file)

* We need two seperate module to handle CSS in webpack viz. `css-loader` and `style-loader`

For more details, [click here](003-loader_handling_CSS_part-1/README.md)

---

## Chapter 4 - Module Loaders - Handling CSS (bundling CSS into a separate CSS file)

* In the second part of HANDLING CSS, we will tweak the build process to ...

For more details, [click here](004-loader_handling_CSS_part-2/README.md)

---

Learning in Progress!! Visit regular to check

**TO DO:**
* Add SECTION LINKS to each chapter at the end