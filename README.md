Static Site Template
===
This template is great to start a new static or [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer) page within a few seconds. The most important files and build tasks are already there and filled with best practices. You only have to run the build task via [Gulp](http://gulpjs.com/) and you will get production ready code.

The goal of this template is to have a template with everything already prepared to start very fast with a new project without being restricted by any limits. With that you are able to add new features or remove already implemented features like the [Application Cache](http://www.html5rocks.com/en/tutorials/appcache/beginner/) if you don't want to use them.

Most important features
---
* Fast layout with precompiled [Handlebars templates](http://handlebarsjs.com/)
* Project structure based on the [atomic design concept](http://patternlab.io/about.html)
* [SCSS](http://sass-lang.com/) as CSS preprocessor
* [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) as naming syntax for CSS classes
* JavaScript package managament with [JSPM](http://jspm.io/)
    + Includes precompiling and ES6 translation via [Babel](https://babeljs.io/)
* Extensive build workflow with Gulp
    + JavaScript precompilation and minimization with [JSPM](http://jspm.io/)
    + Handlebars precompilation and HTML minimization
    + SCSS precompilation and minimization
    + Image optimizing
        - optional [Kraken.io](https://kraken.io/) minimization (requires [PRO account](https://kraken.io/pro))
    + SFTP-Upload
* Application Cache already integrated
* Built with the current best practices and newest standards

I want to use [AngularJS](https://angularjs.org/), [React](https://facebook.github.io/react/), [Ember](http://emberjs.com/) or [Meteor](https://www.meteor.com/)
---
You can easily add AngularJS or React to this template. Read below to see how to add AngularJS or React to this template. Ember is highly recommend to be used with [Ember CLI](http://www.ember-cli.com/). The template is currently not tested and optimized for the use with Meteor.

Planned features
---
* [Web workers](http://www.html5rocks.com/en/tutorials/workers/basics/)
* Extended SVG handling with Gulp
* Upload of the compiled CSS and JavaScript files to the CDN of Amazon or Microsoft with Gulp
* Generation of seperated compiled JavaScript files for each page
* Sitemap generation with Gulp

---

How to set up a new project
===

Fast start (recommend)
---
The initialization script asks you for the project name and a short description of your project. Then it will ask you if you want to add AngularJS or React to your project. After that it will install all dependencies and your project is ready to go.

1. Run `node init.js`
1. Run `gulp watch`

Manual start
---

### Install dependencies
1. Run `npm install`
1. Run `jspm install`
1. Run `gulp watch`

### Add React
1. Run `jspm install react`
1. Run `jspm install jsx`

---

SET-PROJECT-NAME
===
SET-DESCRIPTION

Notes
---
*

Production dependencies
---
*

Development dependencies
---
*
