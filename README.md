# qui-xpress

A bootstrap template for my express.js projects.


## Installation

Installing globally using npm:

```
$ npm install -g @dimaehor/qui-xpress
```


## Creating a new APP

Create an empty folder and go to it.

``` 
$ mkdir myProject
$ cd myProject
```

Use qui-xpress to create your project files quickly.

``` 
$ qui-xpress --yes
```

After build, start app.

``` 
$ npm start
```

And open http://localhost:2112 to view it in the browser.


## Features

- Express.js server template
- Configured MongoDB/Mongoose and Default database scheme.
- Index, about and contact pages.

## Build options

* `template` _[string]_ - View engine option. Can be `EJS` or `HTML`. Default: `EJS`.
* `-i` or `--install` _[boolean]_ - Install dependencies option.
* `--git` _[boolean]_ - Install dependencies option.
* `-y` or `--yes` _[boolean]_ - Option to go with the default options.


## Lisence


* [ MIT ]( https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt )
