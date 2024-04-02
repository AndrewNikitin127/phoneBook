# Makefile

install: #устанавить зависимые модули
	npm ci

start:  #start server
	npx nodemon server.js

lint:
	npx eslint .