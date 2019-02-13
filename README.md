Simple django app with webpack config and ES6 syntax. 

## Overview

- Root directory: the project folders, gitignore, readme file.
- Root/client: webpack and package json.
- Root/djwebpack: django apps
- Root/djwebpack/djwebpack: django settings

## Installation

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


### Webpack

Under `/client`

```
npm install 
npm run build:local
```