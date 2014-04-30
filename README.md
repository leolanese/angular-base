## Angular-base (inspired by angular-seed)

# Getting Started
To get you started you can simply clone the angular-seed repository and install the dependencies:

# Clone angular-base
Clone the angular-base repository using:

```
git clone origin https://github.com/sirwilliam/angular-base.git
cd angular-base
```

# Install Dependencies
We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we neednpm run test-single-run
* `bower_components` - contains the angular framework files


# Run the Application
I have pre-configured the project with a simple development web server.
- node scripts/web-server.js
- run http://localhost:8888/angular-base/app/index.html


# How to run the unit-test:

* the configuration is found at `/karma.conf.js`
* the unit tests are found in `tests/`.

- node scripts/web-server.js
- sudo karma start karma.conf.js --log-level=debug


I also included the Grunt-karma tasks:
grunt karma


You can also ask Karma to do a single run of the tests and then exit.
- npm run test-single-run



# Skills  I have used (the usual suspects):
    ├── javascript
    ├── HTML5
    └── CSS3

# Progressive enhancement path
    ├── using <html> father with: no-js, lt-ie9, lt-ie8, lt-ie7 and no-svg
    ├── selectivizr.js polyfill
    ├── html5shiv.js polyfill
    ├── respond.js
    ├── feature detection framework modernizr.js
    └── including fallbacks for legacy browsers and all vendor using compass mixins

# Tools I have used:
# AngularJS
    ├── filters
    ├── services
    ├── directives
    ├── controllers
    └── angularRoute

# node.js
    ├── grunt
    ├── compass
    ├── jshint
    ├── requirejs
    ├── sass
    ├── watch
    └── ngmin

# Grunt.js
    ├── grunt.loadNpmTasks('grunt-contrib-watch');
    ├── grunt.loadNpmTasks('grunt-contrib-requirejs');
    ├── grunt.loadNpmTasks('grunt-contrib-jshint');
    ├── grunt.loadNpmTasks('grunt-contrib-sass');
    ├── grunt.loadNpmTasks('grunt-contrib-compass');
    ├── grunt.loadNpmTasks('grunt-contrib-csslint');
    ├── grunt.loadNpmTasks('grunt-contrib-jasmine');
    ├── grunt.loadNpmTasks('grunt-karma');
    ├── grunt.loadNpmTasks('grunt-ngmin');
    └── grunt.loadNpmTasks("grunt-modernizr");
        └──
            Enabled Extras
            └──  shiv
            └──  load
            └──  mq
            └──  cssclasses
            └──  fontface
            └──  Generating a custom Modernizr build: modernizr-custom.js
            └──  Uglifying


# Bower.js
    angular-base#0.1 /Users/Leo/Documents/root/angular-base
    ├── angular#1.2.16 (latest is 1.3.0-build.2654+sha.60b2851)
    ├─┬ angular-mocks#1.2.16 extraneous (1.2.17-build.149+sha.21428e5 available, latest is 1.3.0-build.2654+sha.60b2851)
    │ └── angular#1.2.16 (latest is 1.3.0-build.2654+sha.60b2851)
    ├─┬ angular-route#1.2.16 extraneous (1.2.17-build.149+sha.21428e5 available, latest is 1.3.0-build.2654+sha.60b2851)
    │ └── angular#1.2.16
    ├─┬ angular-scenario#1.2.16 extraneous (1.2.17-build.149+sha.21428e5 available, latest is 1.3.0-build.2654+sha.60b2851)
    │ └── angular#1.2.16
    ├── happen#0.1.3 extraneous
    ├── jasmine#1.3.1 extraneous (latest is 2.0.0)
    ├── jasmine-jquery#2.0.3 extraneous
    ├── jquery#1.10.2 (latest is 2.1.1-rc2)
    ├── modernizr#2.6.3 (latest is 2.8.0)
    ├── namespace#0.5.3 extraneous
    ├── normalize-css#3.0.1 extraneous
    ├── requirejs#2.1.11 extraneous
    ├── requirejs-text#2.0.12 extraneous
    ├── selectivizr#1.0.2 extraneous
    └── sinon#1.9.1 extraneous

# Automatic Test
    ├──Jasmine (Automatic test framework: or http://searls.github.io/jasmine-all/jasmine-all-min.js)
    └──karma (Test Driver)
        ├──safari pluggin karma-safari-launcher
        └──ios pluggin karma-ios-launcher


# Lay-out test:
<pre>
    cd tests/casper
    casperjs go.js http://www.bostonglobe.com/
</pre>

# Parts of the tests:
    ├── lib _ jasmine Framework
    ├── spec _ unit-test
    ├── src_ Code to be tested
    └── SpecRunner.html - Runner

# Libraries:
    └── rwd-reset.css (https://github.com/sirwilliam/rwd-reset)

# IDE
    └── WebStorm


# Problems on push:
<pre>
    git rm --cache -r -f .sass-cache/
    git rm --cache -r -f .idea/
</pre>


# Thanks:
<pre>
Inspired by the angular-seed project (Seed project for angular apps.):
https://github.com/angular/angular-seed
</pre>


## Leo Lanese, I build websites, London, UK<br>

# My Portfolio<br>
<a href="http://www.leolanese.com">http://www.leolanese.com</a><br>

# My LAB<br>
<a href="http://www.rwdlab.com">http://www.rwdlab.com</a><br>

# My Activities:<br>
<a href="www.beresponsive.co.uk">www.beresponsive.c.uk</a><br>

# My Blog:<br>
<a href="www.leolanese.com/blog">www.leolanese.com/blog</a><br>

# Twitter:<br>
<a href="http://twitter.com/LeoLaneseltd">http://twitter.com/LeoLaneseltd</a><br>

# Questions / Suggestion?<br>
<a href="mail:to">javscript@leolanese.com</a><br>