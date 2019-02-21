Simple django app with webpack config and ES6 syntax. 

## Overview

- Root directory: the project folders, gitignore, readme file.
- Root/client: webpack and package json.
- Root/djwebpack: django apps
- Root/djwebpack/djwebpack: django settings

## Requirements
- Python (>= 3.0.0)
- virtualenv
- nodejs
npm

## Installation

### Webpack

Under `/client`

```
npm install 
npm run build:local
```

### Django

1. Open the makefile and change the directory for your virtual env. create "virtual-python-envs" directory and change the username according to your username.
virtualenv = /home/akash/virtual-python-envs/djwenv
2. Open terminal and go to project directory.
3. run the followings command:
	* make virtual_env
	* make install_requirements
	* make makemigrations
	* make migrate
	* make run


### Multiple js entry for webpack

If there are multiple js files for different templates, you can separate entry in the config file:
```
entry: {
    app: './js/index.js',
    another: './js/another.js'
},
output: {
    path: DIST_DIR + "/dist",
    filename: '[name].bundle.js'
},
```
The webpack script will now compile two applications: `index.js` and `another.js`. It will create two compiled files based on the entry name: `app.bundle.js` and `another.bundle.js`. Then from the required template, we can the required js.

